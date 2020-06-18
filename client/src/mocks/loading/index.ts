export let mock_loading = {
    login: async function login(params) {
        await this.go('takephoto');
    }
};
