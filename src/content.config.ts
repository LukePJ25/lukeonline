import { defineCollection } from 'astro:content';
import { glob, file } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({
    base: './src/content/blog',
    pattern: '**/*.md',
  }),
});

const photos = defineCollection({
  loader: file('./src/content/photos/photos.json')
});

export const collections = { blog, photos };
