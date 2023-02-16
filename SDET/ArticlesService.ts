export class ArticlesService {
    isActive = false
    tmp = ''

    connect() {}

    getStock(id: number) {
        return `ST_${id}`;
    }

    isConnectionActive() {
        if (this.isActive === true) {
            return true
        } else {
            return false
        }
    }
}