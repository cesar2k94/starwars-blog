const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			favorites: [],
            stateInd: "",
            heroeArray: []
		},
		actions: {
            setFavorites: (list)=>{
                const store = getStore();
                setStore({favorites: store.favorites.filter(list2=>list2.name!==list.name)});
            },
            setHeroeArray: (heroe)=>{
                const store = getStore();
                store.heroeArray.concat(heroe);
            },
            setFavoritesAdd:(list)=>{
                const store = getStore();
                setStore({favorites: store.favorites.concat({"name":list.name, "uid":list.uid})});
            }
		}
	};
};

export default getState;