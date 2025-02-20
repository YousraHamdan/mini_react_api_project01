function Contact() {

    const CenterStyle={
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        height :'100vh',
        margin :'0',
    };

    const containerStyle = {
        textAlign: 'center',
        padding: '100px',
        fontFamily: 'Arial, sans-serif',
        backgroundColor: '#ffffff', 
        borderRadius: '20px',
        maxWidth: '400px',
        margin: '50px auto', 
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease', // Card hover transition
    };

    const headingStyle = {
        color: '#333',
        marginBottom: '20px',
        fontSize: '24px',
    };

    const linkStyle = {
        display: 'block',
        margin: '15px 0',
        color: 'rgb(179, 168, 84)',
        textDecoration: 'none',
        fontSize: '18px',
        transition: 'color 0.3s ease, transform 0.3s ease', 
    };

    return (
        <div style={CenterStyle}>
            <div
                style={containerStyle}
                onMouseOver={(e) => {
                    e.currentTarget.style.transform = 'translateY(-5px)';
                    e.currentTarget.style.boxShadow = '0 8px 16px rgb(179, 168, 84)';
                }}
                onMouseOut={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
                }}
            >
                <h1 style={headingStyle} 
                onMouseOver={(e) => {
                    e.target.style.color = 'rgb(194, 9, 9)';
                }}
                onMouseOut={(e) => {
                    e.target.style.color = 'rgb(0, 0, 0)';
                }}
                >My Contact</h1>
                <a
                    href="https://github.com/YousraHamdan"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={linkStyle}
                    onMouseOver={(e) => {
                        e.target.style.color = 'rgb(194, 9, 9)';
                        e.target.style.transform = 'scale(1.05)';
                    }}
                    onMouseOut={(e) => {
                        e.target.style.color = 'rgb(179, 168, 84)';
                        e.target.style.transform = 'scale(1)';
                    }}
                >
                    GitHub
                </a>
                <a
                    href="https://www.linkedin.com/in/yousra-hamdan-4a0818333"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={linkStyle}
                    onMouseOver={(e) => {
                        e.target.style.color = 'rgb(194, 9, 9)';
                        e.target.style.transform = 'scale(1.05)';
                    }}
                    onMouseOut={(e) => {
                        e.target.style.color = 'rgb(179, 168, 84)';
                        e.target.style.transform = 'scale(1)';
                    }}
                >
                    LinkedIn
                </a>
            </div>
        </div>
    );
}

export default Contact;