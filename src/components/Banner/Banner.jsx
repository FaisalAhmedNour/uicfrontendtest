import {
    Button,
    ThemeProvider,
    createTheme
} from "@mui/material";

const bannerButton = createTheme({
    typography: {
        button: {
            fontSize: '1rem',
            fontWeight: 'bold',
            background: '#13002d'
        },
    },
});

const Banner = () => {
    return (
        <div
            className="h-[600px] bg-center"
            style={{ backgroundImage: 'url("https://aigency.polartemplates.com/v1/img/hero.jpg")' }}
        >
            <div className="flex justify-between items-center gap-32 px-10 h-full max-w-7xl mx-auto">
                <div className="w-1/2 text-white">
                    <h1 className="text-5xl font-bold">Smart solutions for real people.</h1>
                    <p className="text-xl  my-5">With expertise in fields such as design, writing, and social media and more, our team can provide you with smart solutions that generate real results.</p>
                    <ThemeProvider theme={bannerButton}>
                        <Button
                            variant="contained"
                            href="#ai-team"
                            className=""
                        >15 days free trial</Button>
                    </ThemeProvider>
                </div>
                <div className="w-1/2 h-full flex items-end">
                    <img
                        src="https://aigency.polartemplates.com/v1/img/header-image.png"
                        className="w-full md:w-auto"
                    />
                </div>
            </div>
        </div>
    );
};

export default Banner;
