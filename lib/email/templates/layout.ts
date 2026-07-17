import { siteConfig } from "@/config/site";

/** Shared shell so every transactional email looks consistent without a react-email dependency. */
export function emailLayout({ title, bodyHtml }: { title: string; bodyHtml: string }): string {
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${title}</title>
  </head>
  <body style="margin:0;padding:0;background-color:#f3f4f8;font-family:-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="padding:32px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background:#ffffff;border-radius:16px;overflow:hidden;border:1px solid #e4e4ec;">
            <tr>
              <td style="background:#4338ca;padding:24px 32px;">
                <span style="color:#ffffff;font-size:18px;font-weight:700;">${siteConfig.name}</span>
              </td>
            </tr>
            <tr>
              <td style="padding:32px;color:#14141f;font-size:15px;line-height:1.6;">
                ${bodyHtml}
              </td>
            </tr>
            <tr>
              <td style="padding:20px 32px;background:#f3f4f8;color:#4b4b5a;font-size:12px;">
                ${siteConfig.name} &middot; ${siteConfig.url}
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}
