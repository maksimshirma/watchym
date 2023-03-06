import { useState } from "react";

export const useFilter = () => {
    const [config, setConfigState] = useState(null);

    const setConfig = (config) => {
        if (config === null || Object.keys(config).length === 0) {
            setConfigState(null);
        } else {
            const newConfig = {};
            Object.keys(config).forEach((key) => {
                if (config[key] !== null) {
                    newConfig[key] = config[key];
                }
            });
            setConfigState(newConfig);
        }
    };

    const filter = (options) => {
        if (!config) {
            return options;
        }
        let filteredOptions = options;
        Object.keys(config).forEach((key) => {
            if (key === "startDate") {
                filteredOptions = filteredOptions.filter((option) => option.date >= config[key]);
            } else if (key === "endDate") {
                filteredOptions = filteredOptions.filter((option) => option.date < config[key]);
            } else {
                filteredOptions = filteredOptions.filter((option) => option[key] === config[key]);
            }
        });
        return filteredOptions;
    };

    return {
        config,
        setConfig,
        filter,
    };
};
