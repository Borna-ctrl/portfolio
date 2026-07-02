# public/

Static files served at the site root.

## Add your photo here

Drop your portrait in this folder named exactly **`portrait.jpg`**:

```
public/portrait.jpg
```

It shows up in the hero section (the `~/borna.jpg` window). A roughly square
image works best — it's cropped to a square with `object-fit: cover`.

Until the file exists you'll see a `// add public/portrait.jpg` placeholder
instead of a broken image. `.png` works too — just update the `src` in
`src/components/Hero.tsx` from `/portrait.jpg` to `/portrait.png`.
