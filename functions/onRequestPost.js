

async function onRequestPost(context) {
    return await fetch("https://example.com", {
        headers: {
          "X-Source": "Cloudflare-Workers",
        },
      });
}