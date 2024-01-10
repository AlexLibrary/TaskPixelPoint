export default function cloudinaryLoader({
  src,
  width,
  quality,
}: {
  src: string
  width: number
  quality?: number
}) {
  const params = []
  return `https://res.cloudinary.com/dgwqsbypz/image/upload/v1704912906/${params.join(
    ','
  )}${src}`
}