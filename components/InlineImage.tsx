import { cx } from "@/lib/utils";

/* eslint-disable @next/next/no-img-element */
type Props = Readonly<{
  src: string;
  alt?: string;
  float: "left" | "right" | "none";
  caption?: string;
}>;

export const InlineImage = ({ src, alt = "", float, caption = "" }: Props) => (
  <div
    className={cx(
      "text-center",
      float !== "none" ? "w-6/12 relative top-2" : "",
      "mb-4",
      float === "left" ? "mr-4" : float === "right" ? "ml-4" : ""
    )}
    style={{
      float,
    }}
  >
    <img alt={alt} src={src} className="w-full h-auto block m-0" />

    {caption && (
      <p className="mt-2 mb-0">
        <em>
          <small>{caption}</small>
        </em>
      </p>
    )}
  </div>
);
