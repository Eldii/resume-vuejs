import About from '@/pages/About.vue'
import Experience from '@/pages/Experience.vue'
import Study from '@/pages/Study.vue'
import Skill from '@/pages/Skill.vue'
import Hobby from '@/pages/Hobby.vue'

const routes = [
    { path: '/', name: 'about', component: About},
    { path: '/experiences', name: 'experiences', component: Experience},
    { path: '/studies', name: 'studies', component: Study},
    { path: '/skills', name: 'skills', component: Skill},
    { path: '/hobbies', name: 'hobbies', component: Hobby}
]

export default routes