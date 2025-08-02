# Images Folder

This folder is for your landing page images.

## How to add your photos:

1. Copy your images to this `/public/images/` folder
2. Update the gallery section in `/src/app/page.tsx` to use your actual images
3. Replace the placeholder content with Image components like this:

```tsx
<Image
  src="/images/your-photo-name.jpg"
  alt="Description of your photo"
  width={400}
  height={400}
  className="w-full h-full object-cover"
/>
```

## Recommended image formats:
- JPG or WebP for photos
- PNG for images with transparency
- Optimal size: 800x800px for gallery images
- Keep file sizes under 1MB for best performance

## Example file structure:
```
/public/images/
  ├── hero-image.jpg
  ├── feature-1.jpg
  ├── feature-2.jpg
  ├── gallery-1.jpg
  ├── gallery-2.jpg
  └── gallery-3.jpg
```
