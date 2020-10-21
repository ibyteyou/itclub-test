import { createApp, defineComponent } from 'vue'
import App from './app.vue'
import ButtonAdd from './components/buttons/add.vue'
import ButtonBack from './components/buttons/back.vue'
import ButtonSubmit from './components/buttons/submit.vue'
import InputLabel from './components/input-label.vue'
import ScreenInput from './components/screen-input.vue'
import ScreenPage from './components/screen-page.vue'
import 'tailwindcss/base.css'
import 'tailwindcss/components.css'
import 'tailwindcss/utilities.css'

const app = createApp(App)
app.component(ButtonAdd.name, ButtonAdd)
app.component(ButtonBack.name, ButtonBack)
app.component(ButtonSubmit.name, ButtonSubmit)
app.component(InputLabel.name, InputLabel)
app.component(ScreenInput.name, ScreenInput)
app.component(ScreenPage.name, ScreenPage)

app.config.devtools = true

app.mount('#app')
