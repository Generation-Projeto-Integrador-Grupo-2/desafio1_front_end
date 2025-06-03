export const colors = {
    primary: '#46CFB1',
    white: '#FFFFFF',
    gray: {
        light: '#EBFDF8',
        medium: '#D0DFDB',
        dark: '#98B0A9'
    },
    text: '#354B45'
};

export const departmentColors: Record<string, { bg: string; text: string }> = {
    "TI": {
        bg: "bg-blue-100",
        text: "text-[#354B45]"
    },
    "Marketing": {
        bg: "bg-purple-100",
        text: "text-[#354B45]"
    },
    "RH": {
        bg: "bg-yellow-100",
        text: "text-[#354B45]"
    }
};

export const statusColors: Record<string, { bg: string; text: string }> = {
    "Ativo": {
        bg: "bg-green-100",
        text: "text-[#354B45]"
    },
    "Inativo": {
        bg: "bg-red-100",
        text: "text-red-700"
    }
};