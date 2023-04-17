export default function (context) {
  // Only execute this plugin on the client-side
  if (process.client) {
    const script = document.createElement("script");
    script.src = "https://widget.mava.app";
    script.id = "MavaWebChat";
    script.setAttribute(
      "data-token",
      "4b5905555f806bba755efb553116f0a9b56d0c68c8c0fca78ce171332c61c372"
    );
    document.body.appendChild(script);
    if (context && context.head) {
      context.head.appendChild(script);
    }
  }
}
