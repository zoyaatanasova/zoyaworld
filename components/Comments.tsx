import Script from "next/script";

export const Comments = () => (
  <div className="p-5 bg-slate-700">
    <Script
      async
      defer
      src="https://zoyaworld.disqus.com/embed.js"
      data-timestamp={new Date()}
    />

    <div id="disqus_thread"></div>
  </div>
);
