import Vue from 'vue'
import Router from 'vue-router'
import HomePage from './views/HomePage.vue'
import LogIn from './views/LogIn.vue'
import SignUp from './views/SignUp.vue'
import About from './views/About.vue'
import AppHome from './views/AppHome.vue'
import AdminPage from './views/AdminPage.vue'
import EditUser from './views/EditUser.vue'
import UserProfile from './views/UserProfile.vue'
import UserDetails from './views/UserDetails.vue'
// import TripDetails from './views/TripDetails.vue'
// import TripList from './views/TripList.vue'
// import TripEdit from './views/TripEdit.vue'
import FriendList from './components/FriendList.vue'
import UserFilter from './views/UserFilter.vue'
import UserInbox from './views/UserInbox.vue'
import RequestList from './components/RequestList.vue'
import FriendDetails from './components/FriendDetails.vue'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'home',
            component: HomePage
        },
        {
            path: '/login',
            name: 'login',
            component: LogIn
        },
        {
            path: '/signup',
            name: 'signup',
            component: SignUp
        },
        {
            path: '/about',
            name: 'about',
            component: About
        },
        {
            path: '/user',
            name: 'AppHome',
            component: AppHome
        },
        {
            path: '/admin',
            name: 'AdminPage',
            component: AdminPage
        },
        {
            path: '/profile',
            name: 'UserProfile',
            component: UserProfile
        },
        {
            path: '/profile/edit',
            name: 'EditUser',
            component: EditUser
        },
        {
            path: '/user/:userId',
            name: 'UserDetails',
            component: UserDetails
        },
        {
            path: '/inbox',
            name: 'UserInbox',
            component: UserInbox,
            children: [{
                    path: 'friends',
                    component: FriendList
                },
                {
                    path: 'friends/:friendshipId',
                    component: FriendDetails
                },

                {
                    path: 'requests',
                    component: RequestList
                },
            ]
        },
        {
            path: '/filterTravelers',
            name: 'FilterTravelers',
            component: UserFilter
        }
    ]
})