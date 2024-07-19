import React from 'react'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'
import {HiMiniNewspaper} from 'react-icons/hi2'
import {TbReport} from 'react-icons/tb'


export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text',
    },
    {
        title: 'News',
        path: '/news',
        icon: <HiMiniNewspaper />,
        cName: 'nav-text',
    },
    {
        title: 'Careers',
        path: '/Career',
        icon: <IoIcons.IoMdRibbon />,
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
        path: '/submit-tip',
        icon: <IoIcons.IoIosText />,
        cName: 'nav-text',
    },
    {
        title: 'Report a Crime',
        path: '/report-crime',
        icon: <TbReport />,
        cName: 'nav-text',
    },
    {
        title: 'Support',
        path: '/support',
        icon: <IoIcons.IoMdHelpCircle />,
        cName: 'nav-text',
    },
]
