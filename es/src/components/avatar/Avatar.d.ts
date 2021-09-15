import './Avatar.scss';
declare const SIZES: {
    small: boolean;
    large: boolean;
};
export interface AvatarProps {
    /**
     * Url to avatar image.  If passed in, component will render the avatar image instead of the initials
     *
     * Required if "name" is not specified.
     */
    avatarUrl?: string | null;
    /** classname to add to the container element. */
    className?: string;
    /** Users id */
    id?: string | number | null;
    /** Whether this avatar should be labeled as external in the current context */
    isExternal?: boolean;
    /**
     * Users full name.
     *
     * Required if "avatarUrl" is not specified.
     */
    name?: string | null;
    /** Show the external avatar marker if the avatar is marked as for an external user */
    shouldShowExternal?: boolean;
    size?: keyof typeof SIZES | '';
}
declare function Avatar({ avatarUrl, className, name, id, isExternal, shouldShowExternal, size }: AvatarProps): JSX.Element;
export default Avatar;
