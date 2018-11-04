import React from 'react';
import styled from 'styled-components';
import theme from '../style/theme';

import GitHub from '../static/github.svg';
import Instagram from '../static/instagram.svg';
import LinkedIn from '../static/linkedin.svg';
import Songkick from '../static/songkick.svg';
import StackOverflow from '../static/stackoverflow.svg';
import Twitter from '../static/twitter.svg';

/**
 * I'm slightly ashamed of this file
 * I'll do this using gatsby-image later :D 
 */

export default (iconName, iconAlt) => {
    let icon;
    switch (iconName) {
        case "github":
            icon = GitHub;
            break;
        case "instagram":
            icon = Instagram;
            break;
        case "linkedin":
            icon = LinkedIn;
            break;
        case "songkick":
            icon = Songkick;
            break;
        case "stackoverflow":
            icon = StackOverflow;
            break;
        case "twitter":
            icon = Twitter;
            break;
    }

    return (props) => (
        <img src={icon} alt={iconAlt} {...props} /> 
    )
}