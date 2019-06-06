import React from 'react';
import { ListItem, ListItemText, ListItemIcon } from '@material-ui/core';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { PropTypes } from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';


function ListItemLink(props) {
    const { to, open, menuText, ...other } = props;

    return (
        <ListItem button component={RouterLink} to={to} {...other}>
            <ListItemIcon>{<InboxIcon /> }</ListItemIcon>
            <ListItemText primary={menuText} />
            {open != null ? open ? <ExpandLess /> : <ExpandMore /> : null}
        </ListItem>
    );
}

ListItemLink.propTypes = {
    open: PropTypes.bool,
    to: PropTypes.string.isRequired,
};

export default ListItemLink;

