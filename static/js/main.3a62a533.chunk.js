(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{101:function(e,t,n){e.exports={content:"Posts_content__1J-i_",postsBlock:"Posts_postsBlock__3JR_w",posts:"Posts_posts__3ne2E"}},103:function(e,t,n){},112:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return c}));var r=n(36),s=n(3),o={dialogs:[{id:1,name:"Dima"},{id:2,name:"Alina"},{id:3,name:"Vanya"},{id:4,name:"Masha"},{id:5,name:"Katya"}],messages:[{id:1,message:"hello"},{id:2,message:"what are you doing?"},{id:3,message:"where is the money Lebowski?"}]},i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SEND-MESSAGE":return Object(s.a)(Object(s.a)({},e),{},{messages:[].concat(Object(r.a)(e.messages),[{id:6,message:t.newMessage}])});default:return e}},c=function(e){return{type:"SEND-MESSAGE",newMessage:e}}},13:function(e,t,n){e.exports={nav:"Navbar_nav__GBP-5",item:"Navbar_item__1tYra",active:"Navbar_active__2yzIp"}},133:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n(3),s=n(57),o=n(1),i=(n(0),n(8)),c=n(9),a=function(e){return{isAuth:e.auth.isAuth}};function u(e){return Object(c.b)(a)((function(t){var n=t.isAuth,c=Object(s.a)(t,["isAuth"]);return n?Object(o.jsx)(e,Object(r.a)({},c)):Object(o.jsx)(i.a,{to:"/Login"})}))}},141:function(e,t,n){e.exports={preloader:"Preloader_preloader__nqfQk"}},143:function(e,t,n){},146:function(e,t,n){e.exports={item:"Post_item__2yFfh"}},19:function(e,t,n){e.exports={descriptionPost:"ProfileInfo_descriptionPost__2R1kc",avatar:"ProfileInfo_avatar__2BEc5",addPhoto:"ProfileInfo_addPhoto__3i291",status:"ProfileInfo_status__5A8nk",personalInformation:"ProfileInfo_personalInformation__1RVX8",contacts:"ProfileInfo_contacts__3P0_e"}},256:function(e,t,n){},302:function(e,t,n){"use strict";n.r(t);var r=n(1),s=n(0),o=n.n(s),i=(n(103),function(e){e&&e instanceof Function&&n.e(4).then(n.bind(null,304)).then((function(t){var n=t.getCLS,r=t.getFID,s=t.getFCP,o=t.getLCP,i=t.getTTFB;n(e),r(e),s(e),o(e),i(e)}))}),c=n(22),a=n(36),u=n(3),l=n(137),j=n.n(l).a.create({baseURL:"https://social-network.samuraijs.com/api/1.0/",withCredentials:!0,headers:{"API-KEY":"b9ca9bb3-c4d5-4d4a-a9b8-46e44fce672e"}}),b=function(e,t){return j.get("users?count=".concat(e,"&page=").concat(t)).then((function(e){return e.data}))},p=function(e){return j.post("follow/".concat(e))},d=function(e){return j.delete("follow/".concat(e))},A=function(e){return j.get("profile/".concat(e))},O=function(e){return j.get("profile/status/"+e)},h=function(e){return j.put("profile/status",{status:e})},g=function(e){var t=new FormData;return t.append("image",e),j.put("profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}})},f=function(e){return j.put("profile",e)},m=function(){return j.get("auth/me")},C=function(e,t,n){return j.post("auth/login",{email:e,password:t,rememberMe:n})},x=function(){return j.delete("auth/login")},v={newPostText:"",posts:[{id:1,message:"Hi ",likesCount:5},{id:2,message:"how are u?",likesCount:12}],profile:{},status:""},D=function(e){return{type:"SET-STATUS",status:e}},w=function(e){return function(t){f(e).then((function(n){0===n.data.resultCode&&t(function(e){return{type:"SAVE-PROFILE-INFO",profile:e}}(e))}))}},B=n(112),E={},I={users:[],totalUsersCount:0,pageSize:10,currentPage:1,isFetching:!0,followingInProgress:[]},S=function(e){return{type:"CHANGE_FETCHING",isFetching:e}},G=function(e,t){return{type:"TOGGLE_IS_FOLLOWING_PROGRESS",isFetching:e,userID:t}},P=n(45),Q={id:null,login:null,email:null,isAuth:!1},M=function(e,t,n,r){return{type:"SET_USER_DATA",payload:{id:t,email:e,login:n,isAuth:r}}},k=function(){return function(e){return m().then((function(t){if(0===t.data.resultCode){var n=t.data.data,r=n.email,s=n.id,o=n.login;e(M(r,s,o,!0))}}))}},y=n(138),F=n(136),N={initializedSuccess:!1},J=Object(c.c)({profilePage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-POST":var n={id:5,message:t.newPost,likesCount:0};return Object(u.a)(Object(u.a)({},e),{},{posts:[].concat(Object(a.a)(e.posts),[n])});case"SET-USER-PROFILE":return Object(u.a)(Object(u.a)({},e),{},{profile:t.profile});case"SET-STATUS":return Object(u.a)(Object(u.a)({},e),{},{status:t.status});case"SAVE-PHOTO-SUCCESS":return Object(u.a)(Object(u.a)({},e),{},{profile:Object(u.a)(Object(u.a)({},e.profile),{},{photos:t.photos})});case"SAVE-PROFILE-INFO":return Object(u.a)(Object(u.a)({},e),{},{profile:Object(u.a)(Object(u.a)({},e.profile),t.profile)});default:return e}},dialogsPage:B.a,sidebarPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E;return e},usersPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FOLLOW":return Object(u.a)(Object(u.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userID?Object(u.a)(Object(u.a)({},e),{},{followed:!0}):e}))});case"UNFOLLOW":return Object(u.a)(Object(u.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userID?Object(u.a)(Object(u.a)({},e),{},{followed:!1}):e}))});case"SET_USERS":return Object(u.a)(Object(u.a)({},e),{},{users:Object(a.a)(t.users)});case"SET_TOTAL_USERS_COUNT":return Object(u.a)(Object(u.a)({},e),{},{totalUsersCount:t.totalUsersCount});case"SET_CURRENT_PAGE":return Object(u.a)(Object(u.a)({},e),{},{currentPage:t.currentPage});case"CHANGE_FETCHING":return Object(u.a)(Object(u.a)({},e),{},{isFetching:t.isFetching});case"TOGGLE_IS_FOLLOWING_PROGRESS":return Object(u.a)(Object(u.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(a.a)(e.followingInProgress),[t.userID]):e.followingInProgress.filter((function(e){return e!==t.userID}))});default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_USER_DATA":return Object(u.a)(Object(u.a)({},e),t.payload);default:return e}},form:F.a,App:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INITIALIZED_SUCCESS":return Object(u.a)(Object(u.a)({},e),{},{initializedSuccess:!0});default:return e}}}),L=Object(c.e)(J,Object(c.a)(y.a));window.store=L;var K=n(67),U=n.n(K),R=n(28),W=n(29),H=n(31),Y=n(30),q=(n(256),n(13)),T=n.n(q),z=n(11);var V=function(){return Object(r.jsxs)("nav",{className:T.a.nav,children:[Object(r.jsx)("div",{className:T.a.item,children:Object(r.jsx)(z.b,{to:"/profile",activeClassName:T.a.active,children:"Profile"})}),Object(r.jsx)("div",{className:T.a.item,children:Object(r.jsx)(z.b,{to:"/dialogs",activeClassName:T.a.active,children:"Messages"})}),Object(r.jsx)("div",{className:T.a.item,children:Object(r.jsx)(z.b,{to:"/users",activeClassName:T.a.active,children:"Users"})}),Object(r.jsx)("div",{className:T.a.item,children:Object(r.jsx)(z.b,{to:"/News",activeClassName:T.a.active,children:"News"})}),Object(r.jsx)("div",{className:T.a.item,children:Object(r.jsx)(z.b,{to:"/Music",activeClassName:T.a.active,children:"Music"})}),Object(r.jsx)("div",{className:T.a.item,children:Object(r.jsx)(z.b,{to:"/Settings",activeClassName:T.a.active,children:"Settings"})})]})},Z=n(8),X=n(9),_=n(37),$=n(75),ee=n.n($),te=function(e){for(var t=e.totalUsersCount,n=e.pageSize,o=e.currentPage,i=e.onPageChanged,c=Math.ceil(t/n),a=[],u=1;u<=c;u++)a.push(u);var l=Math.ceil(c/25),j=Object(s.useState)(1),b=Object(_.a)(j,2),p=b[0],d=b[1];window.portionNumber=p;var A=25*(p-1)+1,O=25*p;return Object(r.jsxs)("div",{className:ee.a.container,children:[Object(r.jsx)("button",{disabled:p<=1,onClick:function(){d(p-1)},children:"PREV"}),a.filter((function(e){return e>=A&&e<=O})).map((function(e){return Object(r.jsx)("span",{onClick:function(t){return i(e)},className:o===e?ee.a.currentPage:ee.a.page,children:e},e)})),Object(r.jsx)("button",{disabled:l<=p,onClick:function(){d(p+1)},children:"NEXT"})]})},ne=n(96),re=n.n(ne),se=n.p+"static/media/zadrot.9d3c8ede.png",oe=function(e){var t=e.user,n=e.followingInProgress,s=e.follow,o=e.unFollow;return Object(r.jsxs)("div",{className:re.a.user,children:[Object(r.jsx)("div",{children:Object(r.jsx)(z.b,{to:"./profile/"+t.id,children:Object(r.jsx)("img",{className:re.a.userPhoto,src:null!==t.photos.small?t.photos.small:se,alt:""})})}),Object(r.jsx)("div",{children:t.followed?Object(r.jsx)("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){o(t.id)},children:"UnFollow"}):Object(r.jsx)("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){s(t.id)},children:" Follow"})}),Object(r.jsx)("span",{children:Object(r.jsxs)("span",{children:[Object(r.jsxs)("div",{children:["User name: ",t.name]}),Object(r.jsxs)("div",{children:["Status: ",t.status]})]})})]})};function ie(e){return Object(r.jsxs)("div",{children:[Object(r.jsx)(te,{currentPage:e.currentPage,onPageChanged:e.onPageChanged,totalUsersCount:e.totalUsersCount,pageSize:e.pageSize}),Object(r.jsx)("div",{children:e.users.map((function(t){return Object(r.jsx)(oe,{follow:e.follow,unFollow:e.unFollow,followingInProgress:e.followingInProgress,user:t})}))})]})}var ce=n(141),ae=n.n(ce);function ue(){return Object(r.jsx)("div",{className:ae.a.preloader,children:Object(r.jsx)("img",{src:"data:image/gif;base64,R0lGODlhHwGNAMQSACEYGIR7e4yMhJyclJycnKWlpa2trbWtpbW1tb29vca9tcbGxs7Oxs7OztbW1t7e1t7e3ufn5////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP///yH/C05FVFNDQVBFMi4wAwEAAAAh+QQJDAASACwAAAAAHwGNAAAF/qAkjmRpnmiqrmzrvnAsz3Rt33iu73zv/8CgcEgsGo/IpHLJbDqf0Kh0Sq1ar9isdsvter/gsHhMLpvP6LR6zW673/C4fE6v2+/4vH7P7/v/gIGCg4SFhoeIiYqLjI2Oj5CRkpOUlZaXmJmam5ydnp+goaKjpKWmeAoRp6stEQIBAwyssycDAbcBAgq0oBG7KRG4wgS8na4BBhAoB8K4CcWbx7cCyhIRBwcFA6/NAtCa0rgCDMzNwq/e35fh5u3N1eqVDO70udMO8Zfl0/Xm6fmVDNATYKCgAW7CDAC0JLDbsxINEOaCt1ASgXMNUDyQOKAiJYnEUiRo5lGSAokP/lZINIDggAIF+EoqOokrpIqG3QR0lJloHywWPpvt5HlIwTAWOCUiI4rIAcJ/KWy5e8iUUASpuGSpUCqMatVAQW/ZPMGM662vgg6YvaXwBE1xBAZcDIA20FpcQ0cEFRDTVAQIDRwEVkUCsGDBiyQ+nSZAGwGuGbFECEyZ8BkHcQnEjSwiQubMlov26zfWCgLNcgm0PdMgs9wFJDzLnR36kOK5/RpvSeBadZrWqQdwtvZZLsVDDQnia4DVHewRDk4WoHJ6tm80wDM/79ybQG3bpSUwF7D4rIhtCI+PuPrLSPXMq81gDr6989/7lxjgFAZhozmvJJTDl3u9xVdGdq+R/sKVQs3dkhcJirUXBG/WGfgCBAwgkAACgbkQgQMLbLjhAg18lwIEGnKoTHablRDBizCaAOOLsTWgYQLqoQBBAhuWaF+MaHDV0X649KcKYWEtJcR7clm4QgS89ZYaAiaKUABqUmpGQH0nRGkdAQUY0BuXV1rn4pWZPROBmMFpluMIXrpWQJwEADgGbuJIYJQ4jJFHnlrtpLRkgTDMl6V1XHKXZZYpsHlocVxiKZeLBTLZXV8lOPqldbM5GYaAAqj20Gj+sEWEpZ6e0Fp3m8aVqGzFLRqeBJpKGuuWJdhKKae2dndCrY/GhUAaPGo1wjyk+lMEhfB52GsCDdApV22w/hqwAIkJiHlpCcwWqO2Yufa2q61ttompBN1WaECZn6V6xl2j2fkDqi4wK9d0JNSKLwkJnDtCrV551lsBoS0ALgnsThpbd3VC4PBpB4/QK6YQSOquFwIMO8KeybZzsQ70tmDrcbBmBkPFrsXHwJfhIYgrCbouHNy+IyDQZnyYiTtuk2cIuAvHfE7j2l0f4xDyChXP/Gtvw8kImI21xufYbImyKFy4ZsrcLESE1tybnSUPUHQW7KwlgLwQHHSOqULYe90KC3wpb5wDyNsAmrwGF1/MXCOKtclax2Vh0qjt3Zu/sPJcRpJ8CpBoCWkvGJugIHe9gqWPu2xgzq3yulrY/rNaHanO61leeoUw96Ze2GNjAW8ABPiLwkjdSODAAds8eMPRKrideXHxGdx5AXgLfvpnqkZsJenc6S0j8Klbt7rpn+YWA9DtULMD7ylgnjzqzbuG4/GafR7rCYa2GD3gxyuutfsSjPy882T4pJT2MdC+lrE4uF00A8XRWAlW9pntWKppiXtb/Jg3ApeNLmvkE9v8CpcvSE0QfmKIXDvk1QJ46a4G3NPRl2g2goTFTmIMJA74RBCrponHgutTWPsUGD74ERCCETRQBFLUIxOIKEUmcAAPqTQECDQIKjFoQPamsT3qpcBW1OLbAnFYQwVaKjw31MwD2Rc+443LiyIw/iKWVAMPCJjQQFbToRRF4L0hIMsZNmhQM2Y1gytq5kp4BBOY4MQry6zpSwKUwNQ0E7AzkuABbdLMA15kxliRiYEJtFAkw8Ww4tEPOtRLYHjc5kIfBOUGb/QHB2XgNl75CoWfAVMCLKkZbmVJQ4NMjYG0ZMq8vQyFVGTdBMEoAgeU61EYtFogVYglE7RRCM1BogwYcD8CQEB2NLhiLbkoxmkG51ygi9XNINc5bWrxbzKsoiSdWEpv8vKFK6yi7o4ZhObQ8QX+wUXrYGCpX7YJcrR8VI44J6UCaM6HvWoS3bYYTmKe06ASNMGqpIQj6qXxiwWVwAGHwI4PwiCeYpkX/qu8GdEXbvRxI0AZuHRpApR9aTmpJGhpJrkzGpLAAdliSWRMKqwSGAqDmgSo34YAkhtg9CdaEAyJoHmCCJBoAVV60lGTaoVu3ZIM0eGIT1dSFwm8iTiqI8M15JgLUDZjnuq4IwMcAKMHlLMMXC2SDT5ZVRPaUjOd9EKSuGFRFyilqlMMllyGGQbsKeaqK7BfLkbpkYBKCaRggBdYR2A2oi7ERm69I2LDgCd/LLYA9nAH/75yH8CS4Y2qkSPlOmg9vM6BAAoQ1E9zMTbM9mOxpj0Dke6hAkCVNrZ4MBtMFrlIcpjlbM0hLG7fAIG7+Ik89YiJEbs63DwUlx8dUyu/ozbbXDqstmP4q64fGJdZd8BWu21gR3S/C941mEUhDSiI2OQogNGWNw+2tYcyJYAsiXj2vXJYrjxPcN264rcOkZuvCIhEkP/+4QHuDZBYDEBdAxuCAA12sIQnTOEKW/jCGM6whjfM4Q57+MMgDrGIR0ziEpv4xChOsYpXzOIWu/jFMI6xjGdM4xrb+MY4zrGOd8zjHvv4x0AOspCHTOQiGzkKIQAAIfkECQwAEgAsAAAAAB8BjQAABf6gJI5kaZ5oqq5s675wLM90bd94ru987//AoHBILBqPyKRyyWw6n9CodEqtWq/YrHbL7Xq/4LB4TC6bz+i0es1uu9/wuHxOr9vv+Lx+z+/7/4CBgoOEhYaHiImKi4yNjo+QkZKTlJWWl5iZmpucnZ6foKGio6SlpqeofgIFqa0oEQIBAQcrDg+uoA4DsbICECmwAb+4nASyx7IJr7zCxJsHyMcCCggHCg4MEsHIBs6azNHSAuDc3pgN0uHq4cPmlQbr8QG87e6UDPHkyAIO9pbb0QgM2LWum79KA6IJMDgiQcJ9BysBnFePBDxkFSM6woesgQpwDDU+eiiLwIoEvf4CDBAJSQG4bCuYCYDJ8lAEBQQKkJvJwlivWzUPKchHMwVJAUCDGsq3gAW4ARmVAtp5zGTMcAIQJJX6x+e8cFtNeMUalWsejuusnoAWb6XZPw/07ctYYB29UREgNHCwN0IJvXz5JnpgYEACZRL0ZR1A4IBiZGqjRNhL2S8aBwIJCPQ4IkLmzJYbNZBrl1y/KQg0MyYQskyDzIybdoYtMHQjBqQV9kswbl7YJwlotybzevUAziI8GydQNhEDkikhl2hgYPiBAgpsH0nNmPHwMcUzy05Om4B2RxcVEihqoGiJhwIGHDgvhHvm72IwGx+fPK9/SkOxMwJhsrh1gj4GEv5hn3dphBfbJ2xBJMEDjiHjnggBRnNhEMF1xxoNEDCAQAII7OVCBA4sQCKJCzRAHwoQjFjiL+FtVkIEOOZoQo44kjDZiAk099dhJVrG44tcpFfVhOokOEKEyCCx4IcwRBAcbashgGQBqmGpGQH8nXClhzkZQFuYXHp4I5eZKROBmcsxp8KYsBVAJwGIhQFlgRPKlQBOBeyiUzj4ATFloSfo56WHYZLnpZcpwLnoZwOE2SVjNwo3JZmnmSApmR52h2gWBPDCi1VKyrOPLMgVcegLr5UHqkCNKkfpo5GN8Omlt4JZAq+ZhspreSfsOqlACJQBwYoGJCWTqtE0e0SH9/6dOGwCDdzJmHa2GrBAiwmYWV6nIlArnLhn/kpbsLwutxy5EpjrYXVpfjbqGGhBi9WGP7zaArWMsWIRbQKTkAC8utKWpza8FmDbAumSUC+mPpaHJwQYpxbxCMOSC8Gl94qxp77RtOqSAj742xNtFdmaGQwfwxbSc5/lKoGDvpIAbMXGFTwCAsuFhNm67DLIxsj7wCZPNhGwJUDKwrXwcc/F0tbqjno1gMCuIQUKW6M1HqeumjxXO13UPyu8I6Uhf+GAXQuP0AB0zBB0TNsvAEzlCguQGXe5l/59M5vCGhfSzmczOvbLZQs03NSqHU4bwrYaTYZtESg0j+AGQxdPD/4qqzBlozejPcLQswrLkMsUJ66apUTPNu/as3PMMu2Rl+GSNSJ4HoDNKYylzkI8hJ6C3qSHHRLEqRdAuOOyf3YCzmjGTp7huENvu4cZVb63GDLpg3fvqiK1g/EojD696d4b1o7Le7MOvKI26mw9w7WXbbkEvHbP9uXyiM8MhKcQfs1AbyFjAKWSZQKarWY8U7qa9yRHNtc9yH4VvF7u2KU9EUiKVrjbHxiQhgyEucBU+xhfC9B3AgiQyWcjmBgBOoW46O3vVlcr3X4W1zoNihB/ZhOBAxnXuAG0JgIyIlEOVyQjEzggiVr6wVewEgAVWoRQv8EBC0/AK27VsIY+/P7elGw2xJxtj4ga7GD01OjCLrGmHRCQYWuUl6n7SUB9PXhbPkz4AnIYymI5CSSXBtkQYYXmTWRioAi8tpqFRUCOJHhAnAjwABzF8VbVyyAQfzhBdVnsedgjgaJE6D2b6S2HOHBJPIAHAyXx4wd6ExaxbFczO4FSMyWIJQFGxEh7eVKWhTOjCMDIuuEUswS6aNek5rhADvZQBHjswQMUqA4rliBDsrAmC8YITDS2sZvGgZf8bhW0v6SOnJqBnSY7WbTvAS6YsmJm/sLopDtuDAgoQQbnXoCbckANnLf6y5eCyZiooA5LBcDZcOgUNIaqE41AVGMajbi+dgXJdCKgY/4RbRbBIWAzAPt0QT+PUc8ccBOdz8zosC4Io4GKJ6IUNUHMOKXDLz30mezUnztFGS4DlEgEM0UWMjG6SVzm8p4/+GhIWzDSbG6BLy3i4wki0KIFIEkFVG2AVb9gLmGSQZXHWCoLmqqSB2RRJM3xzO3OAFan2uCj81gIypSimQIwwAE5eoAu00DWksKAhCVRigzhSQBUjgEcPKHBRMJhQHsoc1aKNEMEfMfKFtAtIFJZKZZIF4bJxqOxwFCVNlGhtcHWlbOdfUwvhDTV3MgCtBrxD2vH4LtoDOCsrSWUAUw127egIV9ySewKFisAq4Qopr6dAwHVIafgrUOqyY0DcMJ3mxYGRKCSlWRAhdTR2+i6IRYC4Axv0rGPcfTGLt31bhsg0B6DuTaAAYCuevWwXPi6db6CyNcU9YXfQTyAZMztbyB8txDWVCcbBRHwH/Z73yuWF7cKpgNcQYoCmYg1wnJQgO8itTkMByJbplKBYT3cBxf6lcQoTrGKV8ziFrv4xTCOsYxnTOMa2/jGOM6xjnfM4x77+MdADrKQh0zkIhv5yEhOspKXzOQmO/nJUI6ylKdM5Spb+cpYzrKWt8xl9YYAAAAh+QQJDAASACwAAAAAHwGNAAAF/qAkjmRpnmiqrmzrvnAsz3Rt33iu73zv/8CgcEgsGo/IpHLJbDqf0Kh0Sq1ar9isdsvter/gsHhMLpvP6LR6zW673/C4fE6v2+/4vH7P7/v/gIGCg4SFhoeIiYqLjI2Oj5CRkpOUlZaXmJmam5ydnp+goaKjpKWmcBEDBAIEp64oqQIBs7OvtiQHtLoNt726tAa9t7K/A8K2CLTEAgYHKA4Px50Kv7oCChEjDrLG0poKxNXKDBK5tBDemODi7MXpluvtAeHiwe+S8coEBgYJBvTs7jFyoEABtAcDfhEgR+LBP3HE7AlElHCeAICtUCRgJ2DBREUVIUZLsWwWMwcf/hUB1CURRQNrCVIuWmmSoYpwAlDKTNSuIwsCykbuNBShp80UIQUcHToI3MWVvFbgFMr0EAQG9LqlKEosY1VFL+fNWlqCXsyvih7QE4DuRIFfLdEeMvBLqQmaZ0tFgNDAQd9sJPj69QuJZgFVb9spsBKhr2PAZxwQUDU5qogIkwlkhswIAs2eurxKQaCZclwyDTKr8jgCs6rXnBlRk6esWrcID2IvSaB6X5rUlAdYluC6NIG2juia5AhxRMKnAg7oTEL6tW80wDOzvtybgO5ERSFe3IcSqC7k4hYrqZ759BjJwbdf3ku/cD0GDeRLCIlcAkABeSHBniruiZHdapo4/tBcCQwYEE1C/UlQDYC79VYgC1chkAACfbkQgQMLbLjhAg18hwIEGnKITnaVlRDBizCaAOOLJDSmYQIRpgBBAhuWOF+MXjAwAEABShBPNEUqWBdVRwx43QsR8NYbZQiYKEEBxllHGQH6mSCldQQUYEBv+mFpnYtYZhZTBGMGp1mOJHypWgFyElDkFhBUdFGN5pg00gMKDLnWPNOVAE0QTl54AnxTknkCZo02mkKbjYI5gH5ZikachU6CWSgJlFo6paJY5CkAAq2tJMADfcozQIQNXARnDom+kFp3ol4qI66RaipCqJm6yWUJmboYaa6anQBspaWhikZItNFmQFuz/gVAag28WXctd90l0ECdqsRWnAELkOhPpgR8mm2m/GjmKAnF1pjZsfOqom697Rlg5rzbcqFWtMwpYwC0AajXQ60trItYCcAW4OWnIwAbIKTWFcDZAu+OsK8qxoJpJwQgk5axCOgWCkGW/XLhWW0At0zhwRa6kGmExWUGw8mqtSTkvL4eOCy8vXVcmsMlIOBmS5IFLTSBaygnT28t+wmzti2cHBzRDPc2nIx8NYAAsC0dplqXLApHrNKtxVyCzy05eWfNA6TcBU2skCWBqQHPwiQOCj+pwgJg3imBnAMI3kCaWtbbUrxrjywB49wFd5rVpS3eG8TFMa3GA+L8nEID/np2vjcOCK/gZJcSsG0ouolrvqmbJ5SNKdqRt7cr1SPMfHvlaxAcgK+TsgM8rWqv0DfqZbeEca4FID6ZRJkna4LPZdL+Ou9CPw+0dTlGL7cWSi73vdO0DE887qY7LoLqtb+GY9pbQo/vovVuDfn1rsNve+69da+4GgTTCgyUQwwB9qBv22JAvZzFIDBtx0lb8972bDY9x90PbqfBIKjq1SUJjoEz4VFGDYgEhNKpIE/zwhoJNpYu/p1paX7D19ZSx8GzvVB/+Wuf33Z2Q/1pr0Yp6pGXgshAbRDRSjYQgKAOAJDvkaBaszDgDkyogkyJC3L3w5/fnOQrHmpmdj28/t4P5SW5wAhrWiOAAAvjkjxjWU8Cp/NB+CaUkyT+ooTd0QyW9himMI0gAYmDDJvAVESxUWZia2yIsAiQm73sSzslYCEMM1g8kqGrj7iKC6NyGD1f9W2GOIBiNcznAvIFYFY36FviugM0ntHJeZQpgSoJoCFD8uts9EocGCnow7jtbowicICbWldJGganiGLkWNHUF0p5OLEEonwmC7i4yh6isJr1+hTcjMOruFwzWOjapTJx6DcdnmaWw8TeCNhHTinGsQei/IXgYICVulzkMDroFDh5KQKcMUsVcEpa6wrAzj+ybh+EE6emNJg9X1YwWDgqZhvJaBwTQNAHyViO/jxvUM925JNX6RwnCW4lKtSl0V3W8QhDS4AzTxnTXQqd5O5ySAIH+MMAHOpnlpC5yXJ20kvMvAET2zHPF3RULHesgl9IBLGtkGgBSHRqfqJKhXV9cQxX4REgN2qDo46SKaikWGZQ+QWvSnME8dSFFCeiRwY4AEYPmKUasiLUnqxVICwkpmZAOQaA2M1Dn5mFSe8BTlEh0wymJOUKoMUKB/BjYFU5qJYGS4aSBOCvKwihSZo6FK/lVY+ULYMp2RKDCGBELrCAwF7kYFrbjA4WKyEraln7GQHw1UX/uets5xAWV5HVPHXh7G7j0CqNjlIBJcoNoIa6oOHiAbgQsedTskDzO+fmQVVRq4s7rHsHeoDMd7T5zFm5GwYImAQ5EHgIyyYEXbWS1w6QNYFDAssKjyQAILd9Lx58ZycvKUO2+q3Dv37x2ucAOMB0GPAudITgQCiYFphtcCAYMKEDS7gPeVKFLOp44Q57+MMgDrGIR0ziEpv4xChOsYpXzOIWu/jFMI6xjGdM4xrb+MY4zrGOd8zjHvv4x0AOspCHTOQiG/nISE6ykpfM5CY7+clQjjIkQgAAIfkEBQwAEgAsAAAAAB8BjQAABf6gJI5kaZ5oqq5s675wLM90bd94ru987//AoHBILBqPyKRyyWw6n9CodEqtWq/YrHbL7Xq/4LB4TC6bz+i0es1uu9/wuHxOr9vv+Lx+z+/7/4CBgoOEhYaHiImKi4yNjo+QkZKTlJWWl5iZmpucnZ6foKGio6ReEaWoMwMDAgUDBw4PqbMnEQIBuLkKtLwjD7e5uLK9vAzBuALDxLMKwLkCDMuzDgPHAQTSqAoEzsgBAgnZnAewys3WwQIGyuKVDsADChEH3ei4A+ztkgfp9c/o+EZEeHBKHyNb9pARGGAAQQJWxwxIcKCA3gGDjBQkxEUgHwMC6ao9y4eREEJ74P5QMPA3siSiByK95ZKY4hy6lC4PPTAQ81k0FSDthcv58mE6CCv4ycw1lCiilc9YQAXoNNHUayweHBOw0MDPqoauJlthLBeBBSTBEoL5rCkKpbjcqkXUc4CKCDHHzlV0NQDNE3C/7V3ENpgBpCQcBMaZKgKEBg4gFxzxOHJkR32/qWPQ4ACrbtiyRIBMerIZBwsJLGxAIkLq1KYRUdsogGXaKQhUD1D910yD1LsXtAa+MLahk/825kKMJQHx3mV+7149fPpu5ofwKt/Y2wHnigd2Ocm9ezd0MtJTCxdInIDxtShrK1cnolk3AdiVkE99fgxq6+sJ5NiAjOz0jwCsNf5gAE8L+TOWRseE1sR+5qWRXnCZGNDWCYV5A40EEAZjlxPOlUdAfy1AwIBDCEDmQgQOLJAAiws08B4KELDYAFLpUddaBEACaUKQQgrUgEMJ5JcCBAnMaKMIRN54BUgCBGhCX+o4IMEvEaIwj3hCUHhiDBE4R9x0CEhZgG5nqnbWCmaaSEABBhBnpQRrmlhCBGumFk4EdVqnmpIkxAlcAYYSIFcWO6FYn0hZjpDZAF8JVA19YT4Hw39tmngnlGzKaeJuKQTa6WsD3BmqhKCa2NCpBGh5gqminuloGPSwQgACIjygAETW1FaAAqxJQA8y8gQh5q0l/NZerakO+Wybqv7NOm2tb5Kw6p7UQlutCbSuKiqvaLyDDE0MHLudOuoiEw8QJfL34qqKNpDobrG5Zt4CNSZQZ3uyjhDvc//aWcK21YlL724BizCwqwbk+RqzXdh0Lj0sbRcREMu6EO9uBZQQbsglJNAwCeG65RpxBZi2gMEkSExqwtMpCsHNucE8Ar0NQxAqxVsgp3E661bKQ8ctrJqfvmzC4DNwvTEgJ6siXJjtzsRxax3JJCAgaHcI0zymGZmhdGbGG3KsKQs+b22ticV6+diR4fbmCnCf9jhA3CKE3aq8za4tgpiLMt3VGR2i5FXDD/jbUzqL8vDx2CssIGfkhg4QeQN9jopqb/5+j2C1qlknfHgJbesGOnEnS8B0hYgbwBJXCdwmguzWdJSpqy2I+akEVkOH2rWCGz5z4AAeXDp7vGsNeN/EKWk80F1oKJM6v5sAweOM/YA0nDqToHdvL0NbQOenu97eCaOXIDPV00tr3eomSi/4GWUFE3kKO3UTkNrNW4Hv2Fe8MyWJeW76i/GoJgJO+QhrehLbeV5HOQkoTX6qS8MDAoOVGCQOUz+YHNA+Yh1ylUBqrwmQmPimvgBacHniC98LI4jA9NWQIShD1acoSL0t5I8jtlOBxQIwIu/db0ly4lrMWAfB1GAQdn0TFAuBp0Pl0fBvUERgFlF4xb/Z0HUscv6SCWZERhOOwAFhTBMRevKhGcDEGUV03dGOmIJV5ctvoWvh8yQgJgZyUTWk62L8nGfD7bHpRMyBwPugMz5uwXBwMvSB0ARggx9eozwCuIgO+qiaNXlyTnMSmOcmAyg5mfFu01HZIkkAk0N2BEiKRNXVRPA+52URixV8YXtA+SzhHZGCDJzcFHvQlx6iIChU0cHkPLc+rL1mTglA33RK1iaHoHJiyutWmwLpRNPhkJDfPKOgPOc5RqLKjHrsZtciiQPFhMcz6TCaDDgooh30kZlXNCQ+UXWyBcrya6jz1jgBaUV14nKCdFzmPzMYQxfqsTwmGGAP6OmTG1AUGYSagf6YBioo1LmJnKkh1PDIWYDgjXFhJ8ocN4/nxXDesD/OMmDqbtlIbzJwhT54XDxvEKJ66C4H91woS0WH0uyJ4GkGG6RHAUbFmq0UfnTkYQoc4K+GFOtp5UEnp24JzJN6ygcX/YY8YxCiYAWRCZGpUetSEIEaLUBKd3ErXKswsFl+oaxb2d8LCrAV+ejFKRlVX/TGYLH7jPUF2jHLAiDgncAapJMMcECQGtcmMiAAGP4w5pW6oVeivA+kqhlmF6RmgCYZpaI04OBZXaKwWqHTDGUFIZnqMZgmcnQhRh0DlsAEAw5qth1H+mwnc1sG3LlrtSUYYvdqKxAIOGYOUkuHMfLNlQ7kMjcOQ/zGWkugGJ36xbrXdUN2v7EOL9lnKzM5bHixizYBxEMB3mmAAn6Ftpastw7jvUlt5DM0Aqj3vmsQGtGGpplg/RfAakjcgNfFFRk5Y7kIhkO7bpFS726ltMM4B4QjDIcGwFFWjdvNTcrbrFVw+A72EUDrGudTFYD3xGiAgAL2x6V0wLhA91HxjRVRY/vu+BDG8GtttvvjQBhgxouNRZGXzOQmO/nJUI6ylKdM5Spb+cpYzrKWt8zlLnv5y2AOs5jHTOYym/nMaE6zmtfM5ja7+c1wjrOc50znOtv5znjOs573zOc++/nPWQgBAAA7",alt:""})})}var le=n(142),je=Object(le.a)((function(e){return e.usersPage.users}),(function(e){return e})),be=function(e){return e.usersPage.pageSize},pe=function(e){return e.usersPage.totalUsersCount},de=function(e){return e.usersPage.currentPage},Ae=function(e){return e.usersPage.isFetching},Oe=function(e){return e.usersPage.followingInProgress},he=function(e){Object(H.a)(n,e);var t=Object(Y.a)(n);function n(){var e;Object(R.a)(this,n);for(var r=arguments.length,s=new Array(r),o=0;o<r;o++)s[o]=arguments[o];return(e=t.call.apply(t,[this].concat(s))).onPageChanged=function(t){e.props.requestUsers(e.props.pageSize,t),e.props.setCurrentPage(t)},e}return Object(W.a)(n,[{key:"componentDidMount",value:function(){this.props.requestUsers(this.props.pageSize,this.props.currentPage)}},{key:"render",value:function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("div",{children:this.props.isFetching?Object(r.jsx)(ue,{}):null}),Object(r.jsx)(ie,{users:this.props.users,totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,follow:this.props.follow,unFollow:this.props.unFollow,onPageChanged:this.onPageChanged,followingInProgress:this.props.followingInProgress})]})}}]),n}(o.a.Component),ge=Object(c.d)(Object(X.b)((function(e){return{users:je(e),totalUsersCount:pe(e),pageSize:be(e),currentPage:de(e),isFetching:Ae(e),followingInProgress:Oe(e)}}),{follow:function(e){return function(t){t(G(!0,e)),p(e).then((function(n){0===n.data.resultCode&&t(function(e){return{type:"FOLLOW",userID:e}}(e)),t(G(!1,e))}))}},unFollow:function(e){return function(t){t(G(!0,e)),d(e).then((function(n){0===n.data.resultCode&&t(function(e){return{type:"UNFOLLOW",userID:e}}(e)),t(G(!1,e))}))}},setCurrentPage:function(e){return{type:"SET_CURRENT_PAGE",currentPage:e}},toggleFollowingInProgress:G,requestUsers:function(e,t){return function(n){n(S(!0)),b(e,t).then((function(e){n(S(!1)),n({type:"SET_USERS",users:e.items}),n({type:"SET_TOTAL_USERS_COUNT",totalUsersCount:e.totalCount})}))}}}))(he),fe=n(97),me=n.n(fe);var Ce=function(e){return Object(r.jsxs)("header",{className:me.a.header,children:[Object(r.jsx)("img",{src:"https://ru.react.js.org/logo-og.png"}),Object(r.jsxs)("div",{className:me.a.loginBlock,children:[e.isAuth?Object(r.jsxs)("div",{children:[e.login," - ",Object(r.jsx)("button",{onClick:e.logout,children:"Logout"})]}):Object(r.jsx)(z.b,{to:"/Login",children:"Login"})," "]})]})},xe=function(e){Object(H.a)(n,e);var t=Object(Y.a)(n);function n(){return Object(R.a)(this,n),t.apply(this,arguments)}return Object(W.a)(n,[{key:"render",value:function(){return Object(r.jsx)(Ce,{isAuth:this.props.isAuth,login:this.props.login,logout:this.props.logout})}}]),n}(o.a.Component),ve=Object(X.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logout:function(){return function(e){x().then((function(t){0===t.data.resultCode&&e(M(null,null,null,!1))}))}}})(xe),De=n(135),we=n(134),Be=n(40),Ee=n(41),Ie=n(55),Se=n.n(Ie),Ge=Object(Ee.a)(20),Pe=Object(we.a)({form:"login"})((function(e){return Object(r.jsxs)("form",{action:"",onSubmit:e.handleSubmit,children:[Object(r.jsx)("div",{children:Object(r.jsx)(De.a,{placeholder:"Email",name:"email",component:Be.a,validate:[Ee.b,Ge]})}),Object(r.jsx)("div",{children:Object(r.jsx)(De.a,{placeholder:"Password",name:"password",type:"password",component:Be.a})}),Object(r.jsxs)("div",{children:[Object(r.jsx)(De.a,{type:"checkbox",name:"rememberMe",component:Be.a})," remember me"]}),e.error&&Object(r.jsx)("div",{className:Se.a.formSummaryError,children:e.error}),Object(r.jsx)("div",{children:Object(r.jsx)("button",{children:"Login"})})]})})),Qe=Object(X.b)((function(e){return{isAuth:e.auth.isAuth}}),{login:function(e,t,n){return function(r){C(e,t,n).then((function(e){if(0===e.data.resultCode)r(k());else{var t=e.data.messages.length>0?e.data.messages[0]:"Some Error";r(Object(P.a)("login",{_error:t}))}}))}}})((function(e){return e.isAuth?Object(r.jsx)(Z.a,{to:"/profile"}):Object(r.jsxs)("div",{children:[Object(r.jsx)("h1",{children:"LOGIN"}),Object(r.jsx)(Pe,{onSubmit:function(t){e.login(t.email,t.password,t.rememberMe)}})]})})),Me=n(143),ke=n.n(Me),ye=n(19),Fe=n.n(ye),Ne=function(e){var t=Object(s.useState)(e.status),n=Object(_.a)(t,2),o=n[0],i=n[1],c=Object(s.useState)(!1),a=Object(_.a)(c,2),u=a[0],l=a[1];Object(s.useEffect)((function(){i(e.status)}),[e.status]);return Object(r.jsx)("div",{className:Fe.a.status,children:u?Object(r.jsx)("div",{children:Object(r.jsx)("input",{type:"text",onChange:function(e){i(e.currentTarget.value)},onBlur:function(){l(!1),e.updateStatus(o)},autoFocus:!0,value:o})}):Object(r.jsxs)("div",{children:[Object(r.jsx)("b",{children:"Status:"})," ",Object(r.jsx)("span",{onDoubleClick:function(){l(!0)},children:e.status||"YOUR STATUS"})]})})},Je=n(147),Le=n(71),Ke=function(e){var t=e.contactTitle,n=e.contactValue,s=e.editMode,o=e.formik;if(null===e.contactValue)return Object(r.jsx)("span",{});var i=(null===o||void 0===o?void 0:o.getFieldProps)?o.getFieldProps("contacts"):{};return s?Object(r.jsxs)("div",{children:[Object(r.jsx)("b",{children:t}),": ",Object(r.jsx)("input",Object(u.a)(Object(u.a)({},i),{},{value:JSON.parse(i.value)[t],onChange:function(e){var n=i.value?JSON.parse(i.value):Object(Le.a)({},t,"");n[t]=e.currentTarget.value,e.currentTarget.value=JSON.stringify(n),i.onChange(e)}}))," "]}):Object(r.jsxs)("div",{children:[Object(r.jsx)("b",{children:t}),": ",n]})},Ue=function(e){var t=Object(X.c)(),n=Object(Je.a)({initialValues:{fullName:e.profile.fullName,lookingForAJob:e.profile.lookingForAJob,lookingForAJobDescription:e.profile.lookingForAJobDescription,contacts:JSON.stringify(e.profile.contacts),aboutMe:e.profile.aboutMe},onSubmit:function(n){t(w(Object(u.a)(Object(u.a)({},n),{},{contacts:JSON.parse(n.contacts)}))),e.toEditMode(!1)}});return Object(r.jsxs)("form",{className:Fe.a.personalInformation,onSubmit:n.handleSubmit,children:[e.owner&&Object(r.jsx)("div",{children:Object(r.jsx)("button",{type:"submit",children:"Save"})}),Object(r.jsxs)("div",{children:[Object(r.jsx)("b",{children:"Full name"}),": ",Object(r.jsx)("input",Object(u.a)({},n.getFieldProps("fullName")))]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("b",{children:"Looking for a job"}),": ",Object(r.jsx)("input",Object(u.a)({type:"checkbox",checked:n.getFieldProps("lookingForAJob").value},n.getFieldProps("lookingForAJob")))]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("b",{children:"My professional skills"}),": ",Object(r.jsx)("textarea",Object(u.a)({},n.getFieldProps("lookingForAJobDescription")))]}),Object(r.jsxs)("div",{className:Fe.a.contacts,children:[Object(r.jsx)("b",{children:"Contacts"}),": ",Object.keys(e.profile.contacts).map((function(t){return Object(r.jsx)(Ke,{contactValue:e.profile.contacts[t],contactTitle:t,editMode:e.editMode,formik:n})}))]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("b",{children:"About me"}),": ",Object(r.jsx)("textarea",Object(u.a)({},n.getFieldProps("aboutMe")))]})]})};function Re(e){return Object(r.jsxs)("div",{className:Fe.a.personalInformation,children:[e.owner&&Object(r.jsx)("div",{children:Object(r.jsx)("button",{onClick:function(){e.toEditMode(!0)},children:"Edit"})}),Object(r.jsxs)("div",{children:[Object(r.jsx)("b",{children:"Full name"}),": ",e.profile.fullName]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("b",{children:"Looking for a job"}),": ",e.profile.lookingForAJob?"yes":"no"]}),e.profile.lookingForAJob&&Object(r.jsxs)("div",{children:[Object(r.jsx)("b",{children:"My professional skills"}),": ",e.profile.lookingForAJobDescription]}),Object(r.jsxs)("div",{className:Fe.a.contacts,children:[Object(r.jsx)("b",{children:"Contacts"}),":",Object.keys(e.profile.contacts).map((function(t){return Object(r.jsx)(Ke,{contactValue:e.profile.contacts[t],contactTitle:t,editMode:e.editMode},t)}))]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("b",{children:"About me"}),": ",e.profile.aboutMe]})]})}var We=function(e){var t=Object(s.useState)(!1),n=Object(_.a)(t,2),o=n[0],i=n[1];return Object(r.jsxs)("div",{children:[Object(r.jsxs)("div",{className:Fe.a.descriptionPost,children:[Object(r.jsxs)("div",{className:Fe.a.avatar,children:[Object(r.jsx)("img",{src:null!==e.profile.photos.large?e.profile.photos.large:se,alt:"avatar"}),e.isOwner&&Object(r.jsx)("input",{className:Fe.a.addPhoto,type:"file",onChange:function(t){t.currentTarget.files&&e.savePhoto(t.currentTarget.files[0])}})]}),Object(r.jsx)(Ne,{status:e.status,updateStatus:e.updateStatus})]}),o?Object(r.jsx)(Ue,{profile:e.profile,owner:e.isOwner,toEditMode:i,editMode:o}):Object(r.jsx)(Re,{profile:e.profile,owner:e.isOwner,toEditMode:i,editMode:o})]})},He=n(146),Ye=n.n(He);var qe=function(e){return Object(r.jsxs)("div",{className:Ye.a.item,children:[Object(r.jsx)("img",{src:"https://upload.wikimedia.org/wikipedia/commons/c/c3/%D0%9F%D0%B0%D1%82%D1%80%D0%B8%D0%B0%D1%80%D1%85_%D0%9A%D0%B8%D1%80%D0%B8%D0%BB%D0%BB_%D0%BD%D0%B0_%D0%B2%D1%81%D1%82%D1%80%D0%B5%D1%87%D0%B5_%D1%81_%D0%9F%D0%B0%D1%82%D1%80%D0%B8%D0%B0%D1%80%D1%85%D0%BE%D0%BC_%D0%A4%D0%B5%D0%BE%D1%84%D0%B8%D0%BB%D0%BE%D0%BC_III_%D0%B8_%D0%92%D0%BB%D0%B0%D0%B4%D0%B8%D0%BC%D0%B8%D1%80%D0%BE%D0%BC_%D0%9F%D1%83%D1%82%D0%B8%D0%BD%D1%8B%D0%BC.jpg"}),Object(r.jsx)(r.Fragment,{children:e.message}),Object(r.jsx)("div",{children:Object(r.jsxs)("span",{children:[" ",Object(r.jsx)(r.Fragment,{children:e.likesCount})," like"]})})]})},Te=n(101),ze=n.n(Te),Ve=Object(Ee.a)(10),Ze=o.a.memo((function(e){var t=e.posts.map((function(e){return Object(r.jsx)(qe,{message:e.message,likesCount:e.likesCount},e.id)}));return Object(r.jsxs)("div",{className:ze.a.postsBlock,children:[Object(r.jsx)("h3",{children:"My posts"}),Object(r.jsx)(Xe,{onSubmit:function(t){e.addPost(t.newPostBody)}}),Object(r.jsx)("div",{className:ze.a.posts,children:t})]})})),Xe=Object(we.a)({form:"AddPost"})((function(e){return Object(r.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(r.jsx)("div",{children:Object(r.jsx)(De.a,{component:Be.b,name:"newPostBody",validate:[Ee.b,Ve]})}),Object(r.jsx)("div",{children:Object(r.jsx)("button",{children:"App post"})})]})})),_e=Object(X.b)((function(e){return{posts:e.profilePage.posts,newPost:e.profilePage.newPostText}}),(function(e){return{addPost:function(t){return e(function(e){return{type:"ADD-POST",newPost:e}}(t))}}}))(Ze),$e=function(e){return Object.keys(e.profile).length?Object(r.jsxs)("div",{className:ke.a.content,children:[Object(r.jsx)(We,{saveProfile:e.saveProfile,savePhoto:e.savePhoto,isOwner:e.isOwner,profile:e.profile,status:e.status,updateStatus:e.updateStatus}),Object(r.jsx)(_e,{})]}):Object(r.jsx)(ue,{})},et=n(133),tt=function(e){Object(H.a)(n,e);var t=Object(Y.a)(n);function n(){return Object(R.a)(this,n),t.apply(this,arguments)}return Object(W.a)(n,[{key:"refreshProfile",value:function(){var e=this.props.match.params.userID;e||this.props.authorizedUserID&&((e=this.props.authorizedUserID.toString())||this.props.history.push("/Login")),this.props.getUserProfile(e),this.props.getProfileStatus(e)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(e,t,n){this.props.match.params.userID!==e.match.params.userID&&this.refreshProfile()}},{key:"render",value:function(){return Object(r.jsx)($e,{saveProfile:this.props.saveProfile,savePhoto:this.props.savePhoto,isOwner:!this.props.match.params.userID,profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus})}}]),n}(o.a.Component),nt=Object(c.d)(Object(X.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,authorizedUserID:e.auth.id,isAuth:e.auth.isAuth}}),{getUserProfile:function(e){return function(t){A(e).then((function(e){return t({type:"SET-USER-PROFILE",profile:e.data})}))}},getProfileStatus:function(e){return function(t){O(e).then((function(e){return t(D(e.data))}))}},updateStatus:function(e){return function(t){h(e).then((function(n){0===n.data.resultCode&&t(D(e))}))}},savePhoto:function(e){return function(t){g(e).then((function(e){0===e.data.resultCode&&t({type:"SAVE-PHOTO-SUCCESS",photos:e.data.data.photos})}))}},saveProfile:w}),Z.g,et.a)(tt),rt=o.a.lazy((function(){return n.e(3).then(n.bind(null,305))})),st=function(e){Object(H.a)(n,e);var t=Object(Y.a)(n);function n(){return Object(R.a)(this,n),t.apply(this,arguments)}return Object(W.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initializedSuccess?Object(r.jsx)(z.a,{children:Object(r.jsxs)("div",{className:"app-wrapper",children:[Object(r.jsx)(ve,{}),Object(r.jsx)(V,{}),Object(r.jsx)("div",{className:"app-wrapper-content",children:Object(r.jsxs)(Z.d,{children:[Object(r.jsx)(Z.b,{exact:!0,path:"/SocialNetwork",render:function(){return Object(r.jsx)(nt,{})}}),Object(r.jsx)(Z.b,{path:"/dialogs",render:function(){return Object(r.jsxs)(o.a.Suspense,{fallback:Object(r.jsx)(ue,{}),children:[" ",Object(r.jsx)(rt,{})," "]})}}),Object(r.jsx)(Z.b,{path:"/profile/:userID?",render:function(){return Object(r.jsx)(nt,{})}}),Object(r.jsx)(Z.b,{path:"/users",render:function(){return Object(r.jsx)(ge,{})}}),Object(r.jsx)(Z.b,{path:"/Login",render:function(){return Object(r.jsx)(Qe,{})}}),Object(r.jsx)(Z.b,{path:"*",render:function(){return Object(r.jsx)("h1",{style:{textAlign:"center",marginTop:"300px"},children:"404: PAGE NOT FOUND"})}})]})})]})}):Object(r.jsx)(ue,{})}}]),n}(s.Component),ot=Object(X.b)((function(e){return{initializedSuccess:e.App.initializedSuccess}}),{initializeApp:function(){return function(e){var t=e(k());Promise.all([t]).then((function(){e({type:"INITIALIZED_SUCCESS"})}))}}})(st);U.a.render(Object(r.jsx)(z.a,{children:Object(r.jsx)(X.a,{store:L,children:Object(r.jsx)(ot,{})})}),document.getElementById("root")),i()},40:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return u}));var r=n(3),s=n(57),o=n(1),i=(n(0),n(55)),c=n.n(i),a=function(e){var t=e.input,n=e.meta,i=Object(s.a)(e,["input","meta"]);return Object(o.jsxs)("div",{className:n.touched&&n.error?c.a.error:"",children:[Object(o.jsx)("div",{children:Object(o.jsx)("textarea",Object(r.a)(Object(r.a)({},t),i))}),n.touched&&n.error&&Object(o.jsx)("span",{children:n.error})]})},u=function(e){var t=e.input,n=e.meta,i=Object(s.a)(e,["input","meta"]);return Object(o.jsxs)("div",{className:n.touched&&n.error?c.a.error:"",children:[Object(o.jsx)("div",{children:Object(o.jsx)("input",Object(r.a)(Object(r.a)({},t),i))}),n.touched&&n.error&&Object(o.jsx)("span",{children:n.error})]})}},41:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return s}));var r=function(e){if(!e)return"Field is required!"},s=function(e){return function(t){if(t&&t.length>e)return"Max length is ".concat(e," symbols")}}},55:function(e,t,n){e.exports={error:"FormControls_error__1pid4",formSummaryError:"FormControls_formSummaryError__3cMfx"}},75:function(e,t,n){e.exports={currentPage:"Paginator_currentPage__1kOmS",page:"Paginator_page__1FH-i",container:"Paginator_container__LwKDS"}},96:function(e,t,n){e.exports={userPhoto:"Users_userPhoto__PX5hF",currentPage:"Users_currentPage__2Sx0B",users:"Users_users__3Lmy5",user:"Users_user__3x988"}},97:function(e,t,n){e.exports={header:"Header_header__2amaG",loginBlock:"Header_loginBlock__2JLmh"}}},[[302,1,2]]]);
//# sourceMappingURL=main.3a62a533.chunk.js.map