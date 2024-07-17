class ApiBase {
    postFile = async (url, file, successFunction, errorFunction, exceptionFunction) => {
        const formData = new FormData();
        formData.append('file', file);

        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 10000);

        try {
            const response = await fetch(url, {
                method: 'POST',
                body: formData,
                signal: controller.signal,
            });

            clearTimeout(timeoutId);

            const json = await response.json();

            if (response.ok && json.success) {
                successFunction(json);
            } else {
                errorFunction(json.message || 'Error');
            }
        } catch (err) {
            if (err.name === 'AbortError') {
                exceptionFunction('Request timed out');
            } else {
                this.ExLog(err);
                exceptionFunction(err.toString());
            }
        }
    }

    ExLog = async (err) => {
        //for instance --> log to db etc.
    }
}

export default new ApiBase();