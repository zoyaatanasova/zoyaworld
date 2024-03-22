import type { GetStaticProps, NextPage } from "next";
import Link from "next/link";
import { getAllMdx } from "@/lib/mdx";
import { MDXFrontMatter } from "@/lib/types";
import { Page } from "@/components/Page";
import { PostList } from "@/components/PostList";
import { ArrowRight } from "react-feather";

interface HomeProps {
  posts: Array<MDXFrontMatter>;
}

const featuredPostsLength = 3;

const Home: NextPage<HomeProps> = ({ posts }) => {
  const featured = posts.slice(0, featuredPostsLength);
  const rest = posts.slice(featuredPostsLength, posts.length);

  return (
    <Page
      title="Zoya's World"
      description={
        <p>
          Блог за пътувания, кулинарни преживявания, размишления и още нещо...
        </p>
      }
    >
      <PostList posts={featured} />

      {rest.length > 0 && (
        <div className="mt-8">
          <Link
            passHref
            href="/posts"
            className="group inline-flex items-center gap-2 text-pink-600"
          >
            Всички публикации
            <ArrowRight
              className="group-hover:translate-x-0.5 transition-transform"
              width={".9em"}
            />
          </Link>
        </div>
      )}
    </Page>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const mdxFiles = getAllMdx()
    .filter(Boolean)
    .map((post) => post!["frontMatter"]);

  return {
    props: {
      posts: mdxFiles,
    },
  };
};

export default Home;
