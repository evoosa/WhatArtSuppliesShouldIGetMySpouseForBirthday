import React, {Component} from "react";

function PreloadImgElements(props) {
    const {imgFilenames} = props
    return imgFilenames.map(function (imgFilename, index) {
        return <link
            key={index}
            rel="preload"
            href={"https://art-supplies-images.pasten.life/images/" + imgFilename}
            as="image"
        />
    })
}

export class ArtSuppliesImgPreloader extends Component {

    constructor(props) {
        super(props);

        this.state = {
            filenames: []
        };
    }

    GetArtSuppliesImagesFilenamesFromServer = () => {
        return fetch('https://i-need-art-supplies-help.pasten.life:6969/get_all_art_supplies_filenames')
            .then((response) => response.json())
            .then((responseJson) => {
                return responseJson;
            })
            .catch((error) => {
                console.error(error);
            });
    }

    componentDidMount() {
        this.GetArtSuppliesImagesFilenamesFromServer().then((responseData) => {
            this.setState({filenames: responseData.filenames})
        });
    }

    render() {
        if (this.state.filenames.length === 0) {
            return (
                <h1 hidden>fetching art supplies images</h1>
            )
        } else {
            return (
                <React.Fragment>
                    <div>
                        <PreloadImgElements
                            imgFilenames={this.state.filenames}
                        />
                    </div>
                </React.Fragment>
            );
        }
    }
}

export class ImgPreloader extends Component {
    render() {
        const imgFilenames = [
            "phone-lady_compressed.webp",
            "painting_compressed_50.webp",
            "sketching_compressed_50.webp",
            "writing_compressed_50.webp",
            "crafting_compressed_50.webp",
            "penscribble_compressed_50.webp",
            "instagram.webp",
            "o_transparent.webp"
        ]

        return (
            <React.Fragment>
                <div>
                    <PreloadImgElements
                        imgFilenames={imgFilenames}
                    />
                </div>
            </React.Fragment>
        );
    }
}

export default ImgPreloader;
