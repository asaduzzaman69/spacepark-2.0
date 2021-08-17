import { apiProvider } from "./provider"

export class ApiCore {
    constructor(options = {}) {

        if(options.getAll) {
            this.getAll = async (resource) => {
                return apiProvider.getAll(resource)
            }
        }

        if(options.getSingle && options.getSingle) {
            this.getOne = async (resource,id) => {
                return apiProvider.getOne(resource,id)
            }
        }
        if(options.createOne) {
            this.createOne = async (resource,data) => {
                return apiProvider.createOne(resource,data)
            }
        }

        if(options.remove && options.remove) {
            this.remove = (id) => {
                return apiProvider.remove(id)
            }
        }
        if(options.updateOne) {
            this.updateOne = (resource,data) => {
                return apiProvider.updateOne(resource,data)
            }
        }

        this.signup = (data) => {
            return apiProvider.signUp(data)
        }
    }

}