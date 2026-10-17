import React, { useEffect, useState, useRef, useMemo } from "react";
import axios from "axios";
import "../css/dropdown.css";
import { MagnifyingGlassIcon } from "@phosphor-icons/react";

// OMDb API details
const OMDB_BASE = "https://www.omdbapi.com/";
const OMDB_KEY = "8a711d9f"; // provided key

const Dropdown = ({ label, setSelectedTitle }) => {
    const [rawResults, setRawResults] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const debounceRef = useRef(null);
    const requestRef = useRef(0);

    const searchTitles = async (q) => {
        const requestId = ++requestRef.current;
        try {
            setLoading(true);
            setError("");
            const url = `${OMDB_BASE}?s=${encodeURIComponent(q)}&type=movie&apikey=${OMDB_KEY}`;
            const { data } = await axios.get(url);
            if (requestId !== requestRef.current) return;
            if (data.Response === "True" && Array.isArray(data.Search)) {
                setRawResults(data.Search);
            } else {
                setRawResults([]);
                setError(data.Error || "No results found");
            }
        } catch (e) {
            if (requestId !== requestRef.current) return;
            console.error("OMDb search error:", e);
            setError("Failed to fetch titles");
            setRawResults([]);
        } finally {
            if (requestId === requestRef.current) setLoading(false);
        }
    };

    useEffect(() => {
        if (debounceRef.current) clearTimeout(debounceRef.current);

        const query = searchTerm.trim();
        requestRef.current += 1;
        setRawResults([]);

        if (query.length < 2) {
            setLoading(false);
            setError(query.length === 1 ? "Type at least 2 characters" : "");
            return undefined;
        }

        setLoading(true);
        setError("");
        debounceRef.current = setTimeout(() => searchTitles(query), 300);
        return () => clearTimeout(debounceRef.current);
    }, [searchTerm]);

    const handleTitleClick = async (title) => {
        const requestId = ++requestRef.current;
        try {
            setLoading(true);
            setError("");
            const url = `${OMDB_BASE}?i=${encodeURIComponent(title.imdbID)}&plot=short&apikey=${OMDB_KEY}`;
            const { data } = await axios.get(url);
            if (requestId !== requestRef.current) return;
            if (data && data.Response !== "False") {
                setSelectedTitle(data);
                setSearchTerm("");
                setRawResults([]);
            } else {
                setError(data?.Error || "Could not load title details");
            }
        } catch (e) {
            if (requestId !== requestRef.current) return;
            console.error("OMDb details error:", e);
            setError("Failed to fetch title details");
        } finally {
            if (requestId === requestRef.current) setLoading(false);
        }
    };

    const normalize = (v) => String(v || '').toLowerCase();
    const collator = useMemo(() => new Intl.Collator(undefined, { sensitivity: 'base' }), []);

    const filtered = useMemo(() => {
        let list = Array.isArray(rawResults) ? [...rawResults] : [];
        if (searchTerm.trim().length >= 2) {
            const q = normalize(searchTerm);
            list = list.filter(r => normalize(r.Title).includes(q));
        }
        list.sort((a, b) => collator.compare(a.Title || '', b.Title || ''));
        return list;
    }, [rawResults, searchTerm, collator]);

    return (
        <div className="title-picker">
            <div className="search-bar flex items-center">
                <MagnifyingGlassIcon className="inline text-[#19BACC]" size={24} weight="light" />
                <input
                    type="search"
                    aria-label={label}
                    className="w-full h-full pl-2 bg-transparent text-white placeholder-white/70 outline-none"
                    placeholder="Search titles (e.g., Moana)"
                    value={searchTerm}
                    onChange={e => setSearchTerm(e.target.value)}
                />
            </div>
            {searchTerm.trim().length > 0 && (
                <div className="title-search-results" aria-live="polite">
                    {loading ? (
                        <p className="title-search-status">Searching titles...</p>
                    ) : error ? (
                        <p className="title-search-status">{error}</p>
                    ) : filtered.length > 0 ? (
                        filtered.map(title => (
                            <button
                                className="title-search-option"
                                key={title.imdbID}
                                type="button"
                                onClick={() => handleTitleClick(title)}
                            >
                                {title.Title} {title.Year ? `(${title.Year})` : ""}
                            </button>
                        ))
                    ) : searchTerm.trim().length >= 2 ? (
                        <p className="title-search-status">No titles found.</p>
                    ) : (
                        <p className="title-search-status">Type at least 2 characters.</p>
                    )}
                </div>
            )}
        </div>
    );
};

export default Dropdown;