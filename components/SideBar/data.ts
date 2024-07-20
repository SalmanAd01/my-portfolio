import {SocialMediaType,MenueListType, CodingProfileType} from '../../@types/types'
const SideBarMenueList:Array<MenueListType> = [
    {
      href: "#home",
      icon: "las la-home",
      title: "Home",
    },
    {
      href: "#about",
      icon: "lar la-user",
      title: "About",
    },
    {
      href: "#resume",
      icon: "las la-briefcase",
      title: "Resume",
    },
    {
      href: "#skills",
      icon: "las la-shapes",
      title: "Skills",
    },
    {
      href: "#portfolio",
      icon: "las la-grip-vertical",
      title: "Portfolios",
    },
  ];
  const SideBarSocial:Array<SocialMediaType> = [
    {
      href: "https://twitter.com/AdhikariSalman?t=RxCEcOAXyNev9pp2-HWnxQ&s=09",
      icon: "lab la-twitter",
    },
    {
      href: "https://github.com/SalmanAd01",
      icon: "lab la-github",
    },
    {
      href: "https://www.linkedin.com/in/salman-adhikari-a938911bb/",
      icon: "lab la-linkedin-in",
    },
  ];

  const SocialMedia:Array<SocialMediaType> = [
    {
      href: "https://twitter.com/AdhikariSalman?t=RxCEcOAXyNev9pp2-HWnxQ&s=09",
      icon: "lab la-twitter",
    },
    {
      href: "https://www.linkedin.com/in/salman-adhikari-a938911bb/",
      icon: "lab la-linkedin-in",
    },
    {
      href: "https://leetcode.com/SalmanAd01/",
      icon: "las la-code",
    },
    {
      href: "https://github.com/SalmanAd01",
      icon: "lab la-github",
    },
  ];

  const SideBarCodingProfile: Array<CodingProfileType> = [
    {
      href: "https://leetcode.com/SalmanAd01/",
      username: "SalmanAd01",
      platform: "leetcode"
    },
    {
      href: "https://codeforces.com/profile/SalmanAd01",
      username: "SalmanAd01",
      platform: "codeforces"
    },
    {
      href: "https://www.codechef.com/users/salmanad01",
      username: "SalmanAd01",
      platform: "codechef"
    },
    {
      href: "https://atcoder.jp/users/SalmanAd01",
      username: "SalmanAd01",
      platform: "atcoder"
    },
  ]

export {SideBarMenueList,SideBarSocial,SocialMedia,SideBarCodingProfile};