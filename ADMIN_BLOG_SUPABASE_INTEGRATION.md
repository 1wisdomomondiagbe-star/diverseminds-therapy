# Admin dashboard blog integration

The main website now reads published blog posts from the shared DiverseMinds Supabase project through its server-side `/api/blog` endpoint. The separate admin dashboard must use the same Supabase project so dashboard changes are reflected on the public site.

## Shared resources

- Supabase project URL: `https://qgmdaqcvlomfwctqvirq.supabase.co`
- Posts table: `public.posts`
- Image bucket: `blog-images`
- Post status values: `draft` and `published`
- Image types accepted by the bucket: JPEG, PNG, WebP
- Image size limit: 5 MB
- Post categories: `All`, `ABA Therapy`, `Speech Therapy`, `Occupational Therapy`, `Parent Tips`, `Special Education`, `General`

## Replace the dashboard data layer

Remove the dashboard's local-storage or legacy Base44 blog implementation. Add a Supabase client using the dashboard's browser-safe public key:

```js
import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY,
);
```

Never place a service-role or secret key in dashboard browser code. Configure `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` in the dashboard's deployment environment.

## Post operations

Use the `public.posts` field names directly:

```js
// Load all posts, including drafts, for the authenticated dashboard user
const { data, error } = await supabase
  .from('posts')
  .select('id,title,slug,category,excerpt,content,cover_image_url,status,published_at,created_at,updated_at')
  .order('created_at', { ascending: false });

// Create a draft
await supabase.from('posts').insert({
  title,
  slug,
  category: category || 'General',
  excerpt: excerpt || null,
  content,
  cover_image_url: coverImageUrl || null,
  status: 'draft',
  published_at: null,
});

// Edit a post
await supabase.from('posts').update({
  title,
  slug,
  category: category || 'General',
  excerpt: excerpt || null,
  content,
  cover_image_url: coverImageUrl || null,
  updated_at: new Date().toISOString(),
}).eq('id', postId);

// Publish
await supabase.from('posts').update({
  status: 'published',
  published_at: new Date().toISOString(),
  updated_at: new Date().toISOString(),
}).eq('id', postId);

// Unpublish
await supabase.from('posts').update({
  status: 'draft',
  published_at: null,
  updated_at: new Date().toISOString(),
}).eq('id', postId);

// Delete
await supabase.from('posts').delete().eq('id', postId);
```

Always check the returned `error` after every operation and refresh the dashboard list after a successful mutation.

## Image upload, replacement, and deletion

Upload to the `blog-images` bucket. Use a unique path such as `${user.id}/${crypto.randomUUID()}-${file.name}`.

```js
const path = `${user.id}/${crypto.randomUUID()}-${file.name}`;
const { error: uploadError } = await supabase.storage
  .from('blog-images')
  .upload(path, file, { upsert: false, contentType: file.type });

const { data: publicUrl } = supabase.storage
  .from('blog-images')
  .getPublicUrl(path);

const cover_image_url = publicUrl.publicUrl;
```

Save `cover_image_url` in the post row. When replacing an image, upload the new image first, update the post with the new URL, then remove the old object only after the update succeeds:

```js
await supabase.storage.from('blog-images').remove([oldPath]);
```

The bucket is public for reads, so published visitors can display cover images. Dashboard writes require an authenticated user.

## Authentication and permissions

The dashboard must sign users in with Supabase Auth before loading or mutating posts. The current database policies allow authenticated users to manage posts and blog images, while anonymous visitors can read published posts and public images. For production, restrict dashboard access to the authorized administrator account or an admin role before exposing the dashboard publicly.

## Field mapping from the old dashboard

| Old dashboard field | Supabase field |
|---|---|
| `published` boolean | `status` (`published` / `draft`) |
| `category` | `category` |
| `cover_image` | `cover_image_url` |
| `published_date` | `published_at` |
| `created_date` | `created_at` |
| `updated_date` | `updated_at` |

The current `public.posts` table does not contain `author` or `tags`. The shared `category` column is constrained to the listed values and defaults to `General`. Do not silently store unsupported fields only in browser storage.

## Verification checklist

1. Create a draft in the dashboard; it must not appear on the public website.
2. Publish it; it must appear on the public website after reload.
3. Edit title, content, excerpt, and image; reload the public post and confirm each change.
4. Unpublish it; it must disappear publicly but remain in the dashboard.
5. Delete it; it must disappear from both applications.
6. Upload a JPEG, PNG, and WebP under 5 MB and verify each public URL.
7. Confirm failed uploads and database errors show a visible message.
8. Confirm no service-role key is present in the dashboard's built JavaScript.
