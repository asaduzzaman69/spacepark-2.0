import { faAddressBook, faCogs, faHome, faPhotoVideo, faUser } from "@fortawesome/free-solid-svg-icons";

export const NavData = [
    {
        label: 'Home',
        icon: faHome,
        id: 1,
        link: '/client'
    },
    {
        label: 'People',
        icon: faAddressBook,
        id: 2,
        link: '/client/people'

    },
    {
        label: 'Photos',
        icon: faPhotoVideo,
        id:3,
        link: '/client/photos'

    },
    {
        label: 'Profile',
        icon: faUser,
        id: 4,
        link: '/client/profile'

    },
    {
        label: 'Setting',
        icon: faCogs,
        id: 5,
        link: '/client/setting'

    }
]