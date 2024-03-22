import { useRouter } from "next/router";
import {
  VKShareButton,
  ViberShareButton,
  RedditShareButton,
  TumblrShareButton,
  TwitterShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  TelegramShareButton,
  WhatsappShareButton,
  PinterestShareButton,
  VKIcon,
  ViberIcon,
  RedditIcon,
  TumblrIcon,
  TwitterIcon,
  TelegramIcon,
  WhatsappIcon,
  FacebookIcon,
  LinkedinIcon,
  PinterestIcon,
} from "react-share";

interface Props {
  title: string;
  image: string;
}

export const SocialShare: React.FC<Readonly<Props>> = ({
  title,
  image,
}: Props) => {
  const { asPath } = useRouter();
  const location = `https://zoyaworld.eu${asPath}`;

  return (
    <div className="flex flex-wrap gap-2 justify-between">
      <h2 className="text-center basis-full shrink-0">
        Споделете в социалните мрежи
      </h2>

      <div className="flex-1 flex justify-center">
        <FacebookShareButton url={location}>
          <FacebookIcon size={32} round />
        </FacebookShareButton>
      </div>

      <div className="flex-1 flex justify-center">
        <TwitterShareButton url={location} title={title}>
          <TwitterIcon size={32} round />
        </TwitterShareButton>
      </div>

      <div className="flex-1 flex justify-center">
        <TelegramShareButton url={location} title={title}>
          <TelegramIcon size={32} round />
        </TelegramShareButton>
      </div>

      <div className="flex-1 flex justify-center">
        <WhatsappShareButton url={location} title={title} separator=":: ">
          <WhatsappIcon size={32} round />
        </WhatsappShareButton>
      </div>

      <div className="flex-1 flex justify-center">
        <LinkedinShareButton url={location}>
          <LinkedinIcon size={32} round />
        </LinkedinShareButton>
      </div>

      <div className="flex-1 flex justify-center">
        <PinterestShareButton url={location} media={`${location}/${image}`}>
          <PinterestIcon size={32} round />
        </PinterestShareButton>
      </div>

      <div className="flex-1 flex justify-center">
        <VKShareButton url={location} image={`${location}/${image}`}>
          <VKIcon size={32} round />
        </VKShareButton>
      </div>

      <div className="flex-1 flex justify-center">
        <RedditShareButton
          url={location}
          title={title}
          windowWidth={660}
          windowHeight={460}
        >
          <RedditIcon size={32} round />
        </RedditShareButton>
      </div>

      <div className="flex-1 flex justify-center">
        <TumblrShareButton url={location} title={title}>
          <TumblrIcon size={32} round />
        </TumblrShareButton>
      </div>

      <div className="flex-1 flex justify-center">
        <ViberShareButton url={location} title={title}>
          <ViberIcon size={32} round />
        </ViberShareButton>
      </div>
    </div>
  );
};
