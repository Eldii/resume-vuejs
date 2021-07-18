import About from '@/components/About.vue'
import Experience from '@/components/Experience.vue'
import Study from '@/components/Study.vue'
import Skill from '@/components/Skill.vue'
import Hobby from '@/components/Hobby.vue'

const routes = [
    { path: '/', name: 'about', component: About},
    { path: '/experiences', name: 'experiences', component: Experience},
    { path: '/studies', name: 'studies', component: Study},
    { path: '/skills', name: 'skills', component: Skill},
    { path: '/hobbies', name: 'hobbies', component: Hobby}
]

export default routes