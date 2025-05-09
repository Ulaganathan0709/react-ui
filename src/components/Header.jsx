import React from "react";

const Header = () => {
    return (
        // 🔳 Header element with height 96 (h-96), flex centering and background image
        <header
            className="h-96 bg-cover bg-center flex items-center justify-center text-white"
            style={{
                backgroundImage:
                    'url("https://t3.ftcdn.net/jpg/05/66/39/78/360_F_566397830_Eyld3KDOWRcqsQUWuZmC94jiiyud2Vv1.jpg")',
            }}
        >
            {/* 🧊 Text box with background blur, semi-transparent black bg, padding and rounded corners */}
            <h1 className="text-4xl font-bold bg-black/50 rounded-lg backdrop-blur-sm p-4">
                🚀Welcome to My Website
            </h1>
        </header>
    );
};

export default Header;
