import Vue from 'vue'
import Router from 'vue-router'
import HomePage from './views/HomePage.vue'
import About from './views/About.vue'
import AppHome from './views/AppHome.vue'
import AdminPage from './views/AdminPage.vue'
import EditUser from './views/EditUser.vue'
import UserProfile from './views/UserProfile.vue'
import UserDetails from './views/UserDetails.vue'
import TripDetails from './views/TripDetails.vue'
import TripList from './views/TripList.vue'
import TripEdit from './views/TripEdit.vue'
import MatchList from './views/MatchList.vue'
import UserFilter from './views/UserFilter.vue'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'home',
            component: HomePage
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
            path: '/trip/',
            name: 'TripList',
            component: TripList
        },
        {
            path: '/trip/edit/:tripId?',
            name: 'TripEdit',
            component: TripEdit
        },
        {
            path: '/trip/:tripId',
            name: 'TripDetails',
            component: TripDetails
        },
        {
            path: '/match/',
            name: 'MatchList',
            component: MatchList
        },
        {
            path: '/filterTravelers',
            name: 'FilterTravelers',
            component: UserFilter
        }
    ]
})