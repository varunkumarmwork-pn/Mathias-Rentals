# Image Setup Guide

All components have been updated to use real images. Follow these steps to integrate your photos.

---

## 🖼️ Step 1: Create Folder Structure

Create the following directories in your project:

```
public/
├── images/
│   ├── properties/
│   │   ├── oakwood.jpeg
│   │   ├── maple.jpeg
│   │   ├── riverside.jpeg
│   │   ├── cedar.jpeg
│   │   └── pine.jpeg
│   ├── gallery/
│   │   ├── living-room.jpeg
│   │   ├── kitchen-reno.jpeg
│   │   ├── bedroom.jpeg
│   │   ├── facade.jpeg
│   │   ├── dining-area.jpeg
│   │   ├── bathroom.jpeg
│   │   ├── office.jpeg
│   │   └── landscaping.jpeg
│   └── renovations/
│       ├── before-1.jpeg
│       ├── after-1.jpeg
│       ├── before-2.jpeg
│       └── after-2.jpeg
```

---

## 🖼️ Step 2: Organize Your Images

You have 10 images (IMG_3231.jpeg through IMG_9799.jpeg). Here's how to map them:

### **Property Photos** (5 images)
- **IMG_3231.jpeg** → `public/images/properties/oakwood.jpeg`
- **IMG_3715.jpeg** → `public/images/properties/maple.jpeg`
- **IMG_5302.jpeg** → `public/images/properties/riverside.jpeg`
- **IMG_6433.jpeg** → `public/images/properties/cedar.jpeg`
- **IMG_9784.jpeg** → `public/images/properties/pine.jpeg`

### **Gallery Photos** (5 images)
- **IMG_9788.jpeg** → `public/images/gallery/living-room.jpeg`
- **IMG_9794.jpeg** → `public/images/gallery/kitchen-reno.jpeg`
- **IMG_9795.jpeg** → `public/images/gallery/bedroom.jpeg`
- **IMG_9798.jpeg** → `public/images/gallery/facade.jpeg`
- **IMG_9799.jpeg** → `public/images/gallery/dining-area.jpeg`

---

## 🔄 Step 3: Copy Images to Public Folder

### Option A: Using Finder (GUI)
1. Open Finder → Navigate to your project
2. Create `public/images/` folder structure as shown above
3. Drag and drop your images from the current folder into the appropriate subfolders
4. Rename each image to match the names above

### Option B: Using Terminal
```bash
# Navigate to project
cd /Users/varunkumar/Documents/Antigravity/Mathias\ Rentals\ and\ Renovations/

# Create directories
mkdir -p public/images/properties
mkdir -p public/images/gallery
mkdir -p public/images/renovations

# Copy and rename images (replace IMG_XXXX with actual filenames)
cp IMG_3231.jpeg public/images/properties/oakwood.jpeg
cp IMG_3715.jpeg public/images/properties/maple.jpeg
cp IMG_5302.jpeg public/images/properties/riverside.jpeg
cp IMG_6433.jpeg public/images/properties/cedar.jpeg
cp IMG_9784.jpeg public/images/properties/pine.jpeg

cp IMG_9788.jpeg public/images/gallery/living-room.jpeg
cp IMG_9794.jpeg public/images/gallery/kitchen-reno.jpeg
cp IMG_9795.jpeg public/images/gallery/bedroom.jpeg
cp IMG_9798.jpeg public/images/gallery/facade.jpeg
cp IMG_9799.jpeg public/images/gallery/dining-area.jpeg
```

---

## 📸 Step 4: Additional Gallery Images (Optional)

If you need more gallery images, add them to `constants/images.ts`:

```ts
export const GALLERY_IMAGES = {
  livingRoom: "/images/gallery/living-room.jpeg",
  bedroom: "/images/gallery/bedroom.jpeg",
  kitchenReno: "/images/gallery/kitchen-reno.jpeg",
  facade: "/images/gallery/facade.jpeg",
  diningArea: "/images/gallery/dining-area.jpeg",
  bathroomUpgrade: "/images/gallery/bathroom.jpeg",    // Optional
  homeOffice: "/images/gallery/office.jpeg",           // Optional
  landscaping: "/images/gallery/landscaping.jpeg",     // Optional
};
```

Create the missing images or remove from the constant if you don't have them.

---

## 🖼️ Step 5: Before/After Renovation Images

For the before/after slider on `/renovations`, you need:
- `public/images/renovations/before-1.jpeg`
- `public/images/renovations/after-1.jpeg`

These are optional. If you don't have before/after photos:

1. The component will still work with gradient placeholders
2. Or use any of your existing images temporarily

To update the slider, edit `constants/images.ts`:

```ts
export const RENOVATION_IMAGES = {
  before1: "/images/renovations/before-1.jpeg",
  after1: "/images/renovations/after-1.jpeg",
  before2: "/images/renovations/before-2.jpeg",
  after2: "/images/renovations/after-2.jpeg",
};
```

---

## ✅ Components Now Using Real Images

### Pages Updated:
- ✅ **Home** → Property cards, gallery strip, renovations highlight
- ✅ **Rentals** → Property listing cards
- ✅ **Renovations** → Before/after slider, gallery section
- ✅ **Gallery** → Full filterable gallery

### Image Optimization:
- All images use Next.js `Image` component (optimized performance)
- Responsive sizes (mobile, tablet, desktop)
- Hover effects (scale on zoom)
- Fallback gradients if images don't load

---

## 🔧 If You Have Different Images

### To swap an image:
Edit `constants/images.ts` and change the path:

```ts
export const PROPERTY_IMAGES = {
  oakwood: "/images/properties/your-image-name.jpeg",
  // ... etc
};
```

Then update the corresponding file in `public/images/`.

### To add new images:
1. Add the image to `public/images/{category}/`
2. Add path to `constants/images.ts`
3. Use it in any component that displays images

---

## 🚀 Testing

After setting up images:

```bash
npm run dev
```

Visit:
- `http://localhost:3000` → See properties with photos
- `http://localhost:3000/rentals` → Property listings
- `http://localhost:3000/gallery` → Full gallery
- `http://localhost:3000/renovations` → Before/after slider

All images should display correctly. If any are missing, you'll see a gray placeholder instead.

---

## 📝 Image Naming Convention

Keep filenames:
- Lowercase
- No spaces (use hyphens)
- Descriptive: `kitchen-reno.jpeg` not `img123.jpeg`
- Consistent format: `.jpeg` or `.jpg` (not mixed)

Example good names:
- `living-room.jpeg`
- `kitchen-renovation.jpeg`
- `master-bedroom.jpeg`
- `exterior-facade.jpeg`

---

## 💾 File Size Optimization

**Recommended:**
- Resize images to ~1200px wide before uploading
- Use JPEG format (smaller file size)
- Aim for 100–300KB per image
- Next.js auto-optimizes on build

**Tools to resize:**
- Mac Preview: Open image → Tools → Adjust Size
- Online: tinypng.com or squoosh.app
- Command line: ImageMagick or ffmpeg

---

## ❓ Troubleshooting

### Images not showing?
1. Check image paths in `constants/images.ts`
2. Verify files exist in `public/images/`
3. Clear `.next` folder: `rm -rf .next && npm run dev`
4. Check browser console for 404 errors

### Images slow to load?
1. Reduce file size (see above)
2. Use JPEG instead of PNG
3. Build for production: `npm run build && npm start`

### Wrong image displayed?
1. Double-check path in `constants/images.ts`
2. Make sure filename matches exactly (case-sensitive)
3. Restart dev server

---

## 📚 Resources

- [Next.js Image Component](https://nextjs.org/docs/app/api-reference/components/image)
- [Image Optimization Best Practices](https://web.dev/image-optimization/)
- [TinyPNG – Compress Images](https://tinypng.com)
