import React from 'react';
import '../assets/scss/Developer.scss';
import {IconButton} from "@material-ui/core";
import AvatarImage from "../assets/img/avatar2.jpg";
import {Facebook, Instagram, LinkedIn, Portrait, Twitter} from "@material-ui/icons";

const Developer = () => {
    return (
        <div className={"Developer"}>
            <h3 className={"Developer-head"}>Meet the developer</h3>
            <div className="Developer-profile">
                <div className="Developer-profileCard">
                    <img src={AvatarImage} alt="Profile"/>
                    <div className={"Card-details"}>
                        <h3>Kavin M</h3>
                        <p>Full Stack developer</p>
                        <p>Competitive Coder</p>
                    </div>
                </div>
                <div className="Developer-profileDetails">
                    <p>A Information Technology Student at Karpagam college of Engineering,Coimbatore.</p>
                    <p>Graduating in 2025 and looking for a responsible position to gain practical knowledge</p>
                    <p>A full-stack web developer and a Competitive coder.</p>
                    <p>I love designing fully responsive websites.</p>
                    <p>I have a keen interest in developing projects, whenever I want to learn something new.</p>
                    <p>And a blogger.</p>
                    <div className="Card-btn">
                        <IconButton target={"_blank"}  href={"#"} title={"kavin"}>
                            <Facebook/>
                        </IconButton>
                        <IconButton target={"_blank"} href={"#"}  title={"kavin"}>
                            <Twitter/>
                        </IconButton>
                        <IconButton target={"_blank"} href={"#"}  title={"kavin"}>
                            <LinkedIn/>
                        </IconButton>
                        <IconButton target={"_blank"} href={"#"}  title={"kavin"}>
                            <Instagram/>
                        </IconButton>
                        <IconButton target={"_blank"} href={"#"}  title={"Web Portfolio"}>
                            <Portrait/>
                        </IconButton>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Developer;