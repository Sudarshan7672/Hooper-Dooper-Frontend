import propTypes from 'prop-types';

const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: 'none', marginLeft: "300px",  marginTop: "30px", cursor: 'pointer' }} // Make sure to set display to 'block'
            onClick={onClick}
        >
            {/* <i className="fa-solid fa-arrow-left text-black text-4xl"></i> */}
        </div>
    );
};

const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: 'block', marginRight: "300px", marginTop: "30px", cursor: 'pointer' }} // Make sure to set display to 'block'
            onClick={onClick}
        >
            {/* <i className="fa-solid fa-arrow-right text-black text-4xl"></i> */}
        </div>
    );
};

PrevArrow.propTypes = {
    className: propTypes.string,
    style: propTypes.object,
    onClick: propTypes.func,
};

NextArrow.propTypes = {
    className: propTypes.string,
    style: propTypes.object,
    onClick: propTypes.func,
};

export { PrevArrow, NextArrow };
