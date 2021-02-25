import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

let router = new Router({
  mode: 'history',
  routes: [
    {
        path: '/',
        name: 'index',
        component: function () {
            return import('../views/Login.vue')
        },
        meta: {
          guest: true
        }
    },

    {
        path: '/register',
        name: 'Register',
        component: function () {
            return import('../views/Register.vue')
        },
        meta: {
          guest: true
        }
    },

    {
      path: '/ForgotPass',
      name: 'Forgot Password',
      component: function () {
          return import('../views/ForgotPassword.vue')
      },
      meta: {
        guest: true
      }
    },

    {
        path: '/home',
        name: 'Home',
        component: function () {
            return import('../views/Home.vue')
        },
        meta: {
          requiresAuth: true
        }
    },

    {
      path: '/adminhome',
      name: 'AdminHome',
      component: function () {
          return import('../views/AdminHome.vue')
      },
      meta: {
        requiresAuth: true,
        is_admin: true
      }
    },

    {
      path: '/profile',
      name: 'Profile',
      component: function () {
          return import('../views/Profile.vue')
      },
      meta: {
        requiresAuth: true,
      }
    },

    {
      path: '/adminprofile',
      name: 'AdminProfile',
      component: function () {
          return import('../views/AdminProfile.vue')
      },
      meta: {
        requiresAuth: true,
        is_admin: true
      }
    },

    {
      path: '/aboutus',
      name: 'SpaAboutUs',
      component: function () {
          return import('../views/SpaAboutUs.vue')
      },
      meta: {
        requiresAuth: true
      }
    },

    {
      path: '/survey/:id',
      name: 'SurveyForm',
      component: function () {
          return import('../views/SurveyForm.vue')
      }
    },
    
    {
      path: '/editprofile',
      name: 'EditProfile',
      component: function () {
          return import('../views/EditProfile.vue')
      },
      meta: {
        requiresAuth: false
      }
    },

    //Cards
    {
      path: '/hometable',
      name: 'HomeTable',
      component: function () {
          return import('../views/HomeTable.vue')
      },
      meta: {
        requiresAuth: false
      }
    },

    {
      path: '/profilepicture',
      name: 'ProfilePicture',
      component: function () {
          return import('../views/ProfilePicture.vue')
      },
      meta: {
        requiresAuth: false
      }
    },

    {
      path: '/profiledetails',
      name: 'ProfileDetails',
      component: function () {
          return import('../views/ProfileDetails.vue')
      },
      meta: {
        requiresAuth: false
      }
    },

    {
      path: '/covid',
      name: 'CovidRecords',
      component: function () {
          return import('../views/CovidRecords.vue')
      },
      meta: {
        requiresAuth: false
      }
    },

    {
      path: '/try',
      name: 'Try',
      component: function () {
          return import('../views/Try.vue')
      },
      meta: {
        requiresAuth: false
      }
    },

    {
      path: '/dashboardtable',
      name: 'DashboardTable',
      component: function () {
          return import('../views/DashboardTable.vue')
      },
      meta: {
        requiresAuth: false
      }
    },

    {
      path: '/profileform',
      name: 'ProfileForm',
      component: function () {
          return import('../views/ProfileForm.vue')
      },
      meta: {
        requiresAuth: false
      }
    },

    {
      path: '/forgotpassword',
      name: 'ForgotPassword',
      component: function () {
          return import('../views/ForgotPassword.vue')
      },
      meta: {
        requiresAuth: false
      }
    },

    {
      path: '/changepassword/:email/:token',
      name: 'ChangePassword',
      component: function () {
          return import('../views/ChangePassword.vue')
      },
      meta: {
        requiresAuth: false
      }
    },
    {
      path: '/homepage',
      name: 'Homepage',
      component: function () {
          return import('../views/Homepage.vue')
      },
      meta: {
        requiresAuth: false
      }
    },
    {
      path: '/homepagedesc',
      name: 'HomepageDesc',
      component: function () {
          return import('../views/HomepageDesc.vue')
      },
      meta: {
        requiresAuth: false
      }
    },

    {
      path: '/sanjuan',
      name: 'SanJuan',
      component: function () {
          return import('../views/SanJuan.vue')
      },
      meta: {
        requiresAuth: false
      }
    },

    {
      path: '/pictures',
      name: 'Pictures',
      component: function () {
          return import('../views/Pictures.vue')
      },
      meta: {
        requiresAuth: false
      }
    },

    {
      path: '/spadesc',
      name: 'SpaDesc',
      component: function () {
          return import('../views/SpaDesc.vue')
      },
      meta: {
        requiresAuth: false
      }
    },

    {
      path: '/contactus',
      name: 'ContactUs',
      component: function () {
          return import('../views/ContactUs.vue')
      },
      meta: {
        requiresAuth: false
      }
    },

    {
      path: '/loginform',
      name: 'LoginForm',
      component: function () {
          return import('../views/LoginForm.vue')
      },
      meta: {
        requiresAuth: false
      }
    },

    {
      path: '/contactform',
      name: 'ContactForm',
      component: function () {
          return import('../views/ContactForm.vue')
      },
      meta: {
        requiresAuth: false
      }
    },

    {
      path: '/contactdetails',
      name: 'ContactDetails',
      component: function () {
          return import('../views/ContactDetails.vue')
      },
      meta: {
        requiresAuth: false
      }
    },
  ]
})

router.beforeEach((to, from, next) => {
    if(to.matched.some(record => record.meta.requiresAuth)) {
      if (localStorage.getItem('token') == null) {
          next({
              path: '/',
              params: { redirect: to.fullPath }
          })
      } else {
          if(to.matched.some(record => record.meta.is_admin)) {
            if(localStorage.getItem('user') == 1){
              next()
            }
            else{
              next({ name: 'Home'})
            }
          }else {
            next()
        }
      }
    } else if(to.matched.some(record => record.meta.guest)) {
        if(localStorage.getItem('token') == null){
            next()
        }
        else{
            next({ name: 'Home'})
        }
    }else{
        next()
      }
})

export default router
// export default new Router({
//     mode: 'history',
//     routes: [
//         {
//             path: '/',
//             name: 'index',
//             component: function () {
//                 return import('../views/Login.vue')
//             },
//             meta: {
//               guest: true
//             }
//         },

//         {
//             path: '/register',
//             name: 'Register',
//             component: function () {
//                 return import('../views/Register.vue')
//             },
//             meta: {
//               guest: true
//             }
//         },

//         {
//             path: '/home',
//             name: 'Home',
//             component: function () {
//                 return import('../views/Home.vue')
//             },
//             meta: {
//               requiresAuth: true
//             }
//         },

//         {
//             path: '/profile',
//             name: 'Profile',
//             component: function () {
//                 return import('../views/Home.vue')
//             },
//             meta: {
//               requiresAuth: true
//             }
//         }
//     ]
// })
