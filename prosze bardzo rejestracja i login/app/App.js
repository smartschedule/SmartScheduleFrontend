import { mapState, mapActions } from 'vuex'

export default {
    template: `
        <div class="jumbotron">
            <div class="container">
                <div class="row">
                    <div class="col-sm-6 offset-sm-3">
                        <div v-if="alert.message" :class="'alert ' + alert.type">{{alert.message}}</div>
                        <router-view></router-view>
                    </div>
                </div>
            </div>
        </div>
    `,
    name: 'app',
    computed: {
        ...mapState({
            alert: state => state.alert
        })
    },
    methods: {
        ...mapActions({
            clearAlert: 'alert/clear' 
        })
    },
    watch: {
        $route (to, from){
            // clear alert on location change
            this.clearAlert();
        }
    } 
};