import dynamic from "next/dynamic";

type Props = Readonly<{
  slug: string;
  title: string;
}>;

export const Comments = ({ slug: identifier, title }: Props) => {
  const url = typeof window !== "undefined" ? window.location.href : "";

  const DiscussionEmbed = dynamic(
    () => import("disqus-react").then((mod) => mod.DiscussionEmbed),
    { ssr: false }
  );

  const disqusConfig = {
    url,
    identifier,
    title,
  };

  return (
    <div style={{ colorScheme: "initial" }}>
      <DiscussionEmbed shortname="zoyaworld" config={disqusConfig} />
    </div>
  );
};
