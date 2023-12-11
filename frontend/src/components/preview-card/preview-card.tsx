import { FC } from "react";
import {
  Wrapper,
  Title,
  Description,
  Image,
  IconRow,
  IconWrapper,
} from "./preview-card.styled";

interface PreviewCardProps {
  title?: string;
  description?: string;
  imageSrc?: string;
  icons?: string[];
}

// TODO: replace with SVGs
const iconsExample = [
  "https://picsum.photos/30/30",
  "https://picsum.photos/31/31",
  "https://picsum.photos/32/32",
  "https://picsum.photos/32/32",
];

const PreviewCard: FC<PreviewCardProps> = ({
  title,
  description,
  imageSrc = "https://picsum.photos/320/180",
  icons = iconsExample,
}) => {
  return (
    <Wrapper>
      {title && <Title>{title}</Title>}
      {description && <Description>{description}</Description>}
      {imageSrc && <Image src={imageSrc} loading="lazy" />}
      {icons && icons.length && (
        <IconRow>
          {icons.map((icon) => (
            <IconWrapper>
              <img src={icon} width={50} />
            </IconWrapper>
          ))}
        </IconRow>
      )}
    </Wrapper>
  );
};

export { PreviewCard };
export type { PreviewCardProps };
