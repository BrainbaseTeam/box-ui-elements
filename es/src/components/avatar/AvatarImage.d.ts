export interface AvatarImageProps {
    className?: string;
    onError?: Function;
    url: string;
}
declare const AvatarImage: ({ className, url, onError }: AvatarImageProps) => JSX.Element;
export default AvatarImage;
