import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
    <ContentLoader
        className={'pizza-block'}
        speed={2}
        width={280}
        height={500}
        viewBox="0 0 280 500"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
        <rect x="383" y="252" rx="3" ry="3" width="88" height="6" />
        <circle cx="134" cy="136" r="125" />
        <rect x="0" y="293" rx="10" ry="10" width="280" height="29" />
        <rect x="0" y="347" rx="9" ry="9" width="280" height="61" />
        <rect x="0" y="427" rx="10" ry="10" width="95" height="30" />
        <rect x="131" y="420" rx="30" ry="30" width="139" height="47" />
    </ContentLoader>
)

export default Skeleton;
