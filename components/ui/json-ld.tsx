/**
 * Renders one or more JSON-LD blocks. `data` is produced exclusively by the
 * builder functions in lib/seo/schema.ts, never from unsanitized user input,
 * so a plain JSON.stringify is safe here.
 */
export function JsonLd({ data }: { data: object | object[] }) {
  const items = Array.isArray(data) ? data : [data];

  return (
    <>
      {items.map((item, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }}
        />
      ))}
    </>
  );
}
