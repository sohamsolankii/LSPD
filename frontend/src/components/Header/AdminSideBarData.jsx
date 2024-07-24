import React from 'react'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'
import {HiMiniNewspaper} from 'react-icons/hi2'
import {MdLocalPolice} from 'react-icons/md'
import {FaLink} from 'react-icons/fa6'

export const AdminSidebarData = [
    {
        title: 'Home',
        path: '/admin',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text',
    },
    {
        title: 'Add Jobs',
        path: '/admin/jobs',
        icon: <FaLink />,
        cName: 'nav-text',
    },
    {
        title: 'Add News',
        path: '/admin/news',
        icon: <HiMiniNewspaper />,
        cName: 'nav-text',
    },
    {
        title: 'Show Tips',
        path: '/admin/show-tips',
        icon: <IoIcons.IoIosText />,
        cName: 'nav-text',
    },
    {
        title: 'Crime Reports',
        path: '/admin/crime-reports',
        icon: <MdLocalPolice />,
        cName: 'nav-text',
    },
    {
        title: 'Add Criminals',
        path: '/admin/WantedList',
        icon: <IoIcons.IoMdWarning />,
        cName: 'nav-text',
    },
]
