import { apiProvider } from "./provider"

export class ApiCore {
    constructor(options = {}) {

        if(options.getAll && options.getAll) {
            this.getAll = () => {
                return apiProvider.getAll(options.url)
            }
        }

        if(options.getSingle && options.getSingle) {
            this.getOne = (id) => {
                return apiProvider.getOne(id)
            }
        }

        if(options.remove && options.remove) {
            this.remove = (id) => {
                return apiProvider.remove(id)
            }
        }

        this.signup = (data) => {
            return apiProvider.signUp(data)
        }
    }

}