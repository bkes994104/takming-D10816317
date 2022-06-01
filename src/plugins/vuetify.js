import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: '#000000',
                secondary: '#484848',
                accent: '#82B1FF',
                error: '#FF5252',
                info: '#2196F3',
                success: '#4CAF50',
                warning: '#FFC107',
                gray: '#8D8D8D',
                white: '#FFFFFF',
                background: 'EFEFEF'
            }
        }
    }
});
