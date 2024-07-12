import React from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'
import {HiMiniNewspaper} from 'react-icons/hi2'

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text',
    },
    {
        title: 'Wanted List',
        path: '/WantedList',
        icon: <IoIcons.IoMdWarning />,
        cName: 'nav-text',
    },
    {
        title: 'Submit a Tip',
        path: '/tip',
        icon: <IoIcons.IoIosText />,
        cName: 'nav-text',
    },
    {
        title: 'News',
        path: '/news',
        icon: <HiMiniNewspaper />,
        cName: 'nav-text',
    },
    {
        title: 'Career',
        path: '/Career',
        icon: <IoIcons.IoMdRibbon />,
        cName: 'nav-text',
    },
    {
        title: 'Messages',
        path: '/messages',
        icon: <FaIcons.FaEnvelopeOpenText />,
        cName: 'nav-text',
    },
    {
        title: 'Support',
        path: '/support',
        icon: <IoIcons.IoMdHelpCircle />,
        cName: 'nav-text',
    },
]
