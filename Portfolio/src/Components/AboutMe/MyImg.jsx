import PropTypes from 'prop-types';

function ProfilePicture({ src, alt, size, hasBorder, hoverEffect }) {
    // Define size classes based on the 'size' prop
    const sizeClass = {
        small: 'w-12 h-12',   // 48px
        medium: 'w-20 h-20',  // 80px
        large: 'w-60 h-60',   // 120px
        largest: 'w-80 h-80',  //160px
    }[size];

    return (
        <div
            className={`
                ${sizeClass} 
                ${hasBorder ? 'border-4 border-gray-300' : ''} 
                ${hoverEffect ? 'transition-transform duration-300 hover:scale-110' : ''} 
                rounded-full overflow-hidden
            `}
        >
            <img
                src={src}
                alt={alt}
                className="object-cover w-full h-full"
            />
        </div>
    );
}

ProfilePicture.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string,
    size: PropTypes.oneOf(['small', 'medium', 'large', 'largest']),
    hasBorder: PropTypes.bool,
    hoverEffect: PropTypes.bool,
};

ProfilePicture.defaultProps = {
    alt: 'Profile Picture',
    size: 'medium',
    hasBorder: false,
    hoverEffect: false,
};

export default ProfilePicture;
