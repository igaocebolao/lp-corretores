import { useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import { ArrowRight, BarChart3, Check, Cloud, CloudUpload, Globe, Headphones, Mail, MapPin, Menu, MessagesSquare, MonitorCog, Phone, Play, Settings2, Shield, Star, TrendingUp, UserPlus, X, Zap } from "lucide-react";
//#region src/assets/dasboard-financeiro.png
var dasboard_financeiro_default = "/assets/dasboard-financeiro-CD5pIbk7.png";
//#endregion
//#region src/assets/Bannertop_1024x1024.png
var Bannertop_1024x1024_default = "/assets/Bannertop_1024x1024-By2m-uQn.png";
//#endregion
//#region src/assets/logo-branca.png
var logo_branca_default = "data:image/png;base64,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";
//#endregion
//#region src/assets/atendimento.png
var atendimento_default = "/assets/atendimento-5-XpZlxC.png";
//#endregion
//#region src/routes/index.tsx?tsr-split=component
function Logo() {
	return /* @__PURE__ */ jsx("div", {
		className: "flex items-center",
		children: /* @__PURE__ */ jsx("a", {
			href: "http://localhost:8080/",
			children: /* @__PURE__ */ jsx("img", {
				src: logo_branca_default,
				alt: "Siganet",
				className: "h-10 w-auto object-contain"
			})
		})
	});
}
function Nav() {
	const [open, setOpen] = useState(false);
	return /* @__PURE__ */ jsxs("header", {
		className: "absolute inset-x-0 top-0 z-20",
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "mx-auto flex max-w-7xl items-center justify-between px-6 py-6",
				children: [
					/* @__PURE__ */ jsx(Logo, {}),
					/* @__PURE__ */ jsx("button", {
						className: "md:hidden z-50",
						onClick: () => setOpen(!open),
						children: open ? /* @__PURE__ */ jsx(X, { className: "h-6 w-6" }) : /* @__PURE__ */ jsx(Menu, { className: "h-6 w-6" })
					}),
					/* @__PURE__ */ jsxs("nav", {
						className: "hidden items-center gap-8 text-sm text-muted-foreground md:flex",
						children: [
							/* @__PURE__ */ jsx("a", {
								href: "#solucao",
								className: "hover:text-foreground transition",
								children: "Solução"
							}),
							/* @__PURE__ */ jsx("a", {
								href: "#funcionalidades",
								className: "hover:text-foreground transition",
								children: "Funcionalidades"
							}),
							/* @__PURE__ */ jsx("a", {
								href: "#como-funciona",
								className: "hover:text-foreground transition",
								children: "Como funciona"
							}),
							/* @__PURE__ */ jsx("a", {
								href: "#depoimentos",
								className: "hover:text-foreground transition",
								children: "Clientes"
							})
						]
					}),
					/* @__PURE__ */ jsxs("a", {
						href: "https://cal.com/igorsiganet/15min",
						target: "blank",
						className: "hidden md:inline-flex items-center gap-2 rounded-lg bg-gradient-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground",
						children: ["Agendar demonstração ", /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })]
					})
				]
			}),
			open && /* @__PURE__ */ jsx("div", {
				className: "fixed inset-0 bg-black/50 backdrop-blur-sm",
				onClick: () => setOpen(false)
			}),
			/* @__PURE__ */ jsx("div", {
				className: `fixed top-0 right-0 h-full w-64 bg-background shadow-xl transform transition-transform duration-300 ${open ? "translate-x-0" : "translate-x-full"}`,
				children: /* @__PURE__ */ jsxs("div", {
					className: "flex flex-col gap-6 p-6 mt-20 text-lg",
					children: [
						/* @__PURE__ */ jsx("a", {
							href: "#solucao",
							onClick: () => setOpen(false),
							className: "py-2",
							children: "Solução"
						}),
						/* @__PURE__ */ jsx("a", {
							href: "#funcionalidades",
							onClick: () => setOpen(false),
							className: "py-2",
							children: "Funcionalidades"
						}),
						/* @__PURE__ */ jsx("a", {
							href: "#como-funciona",
							onClick: () => setOpen(false),
							className: "py-2",
							children: "Como funciona"
						}),
						/* @__PURE__ */ jsx("a", {
							href: "#depoimentos",
							onClick: () => setOpen(false),
							className: "py-2",
							children: "Clientes"
						}),
						/* @__PURE__ */ jsx("a", {
							href: "https://cal.com/igorsiganet/15min",
							target: "blank",
							onClick: () => setOpen(false),
							className: "mt-4 inline-flex items-center justify-center rounded-lg bg-gradient-primary px-4 py-3 text-sm font-semibold text-primary-foreground",
							children: "Agendar demonstração"
						})
					]
				})
			})
		]
	});
}
function Hero() {
	return /* @__PURE__ */ jsxs("section", {
		className: "relative overflow-hidden bg-gradient-hero pt-32 pb-24",
		children: [
			/* @__PURE__ */ jsx("div", { className: "absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full bg-primary/20 blur-3xl" }),
			/* @__PURE__ */ jsx("div", { className: "absolute -bottom-40 -left-20 h-[400px] w-[400px] rounded-full bg-primary-glow/10 blur-3xl" }),
			/* @__PURE__ */ jsxs("div", {
				className: "relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2",
				children: [/* @__PURE__ */ jsxs("div", { children: [
					/* @__PURE__ */ jsxs("span", {
						className: "inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur",
						children: [/* @__PURE__ */ jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-success" }), " Sistema completo para corretores"]
					}),
					/* @__PURE__ */ jsxs("h1", {
						className: "mt-6 text-5xl font-black leading-[1.05] tracking-tight md:text-6xl lg:text-7xl",
						children: ["Você ", /* @__PURE__ */ jsx("span", {
							className: "text-gradient",
							children: "Corretor"
						})]
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mt-6 max-w-xl text-lg text-muted-foreground",
						children: "Chega de perder tempo com várias plataformas. Tudo o que você precisa para captar, anunciar e vender imóveis em um só lugar."
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "mt-8 flex flex-wrap items-center gap-4",
						children: [/* @__PURE__ */ jsxs("a", {
							href: "https://cal.com/igorsiganet/15min",
							target: "blank",
							className: "inline-flex items-center gap-2 rounded-xl bg-gradient-primary px-6 py-4 text-base font-semibold text-primary-foreground shadow-glow hover:opacity-95 transition",
							children: ["Agendar demonstração ", /* @__PURE__ */ jsx(ArrowRight, { className: "h-5 w-5" })]
						}), /* @__PURE__ */ jsxs("a", {
							href: "#como-funciona",
							className: "inline-flex items-center gap-2 rounded-xl border border-border bg-surface/40 px-6 py-4 text-base font-semibold text-foreground backdrop-blur hover:bg-surface transition",
							children: [/* @__PURE__ */ jsx(Play, { className: "h-4 w-4" }), " Ver como funciona"]
						})]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "mt-10 flex flex-wrap items-center gap-x-8 gap-y-4 text-xs text-muted-foreground",
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ jsx(Cloud, { className: "h-4 w-4 text-primary" }), " 100% NA NUVEM"]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ jsx(Shield, { className: "h-4 w-4 text-primary" }), " DADOS SEGUROS"]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ jsx(Zap, { className: "h-4 w-4 text-primary" }), " IMPLANTAÇÃO RÁPIDA"]
							})
						]
					})
				] }), /* @__PURE__ */ jsxs("div", {
					className: "relative",
					children: [/* @__PURE__ */ jsx("div", { className: "absolute inset-0 -z-10 rounded-3xl bg-gradient-primary opacity-30 blur-3xl" }), /* @__PURE__ */ jsx("img", {
						src: Bannertop_1024x1024_default,
						alt: "Empresário usando o SIGANET",
						width: 1024,
						height: 1280,
						className: "relative mx-auto max-h-[600px] rounded-2xl object-cover"
					})]
				})]
			})
		]
	});
}
function Problem() {
	return /* @__PURE__ */ jsx("section", {
		className: "py-24",
		id: "solucao",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-7xl px-6",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "mx-auto max-w-2xl text-center",
				children: [/* @__PURE__ */ jsxs("h2", {
					className: "text-4xl font-bold md:text-5xl",
					children: [
						" Você ",
						/* @__PURE__ */ jsx("span", {
							className: "text-destructive",
							children: "ainda"
						}),
						" trabalha assim?"
					]
				}), /* @__PURE__ */ jsx("p", {
					className: "mt-4 text-muted-foreground",
					children: "A desorganização custa caro. Veja a diferença que o SIGANET faz."
				})]
			}), /* @__PURE__ */ jsxs("div", {
				className: "mt-14 grid grid-cols-1 gap-6 md:grid-cols-2",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "rounded-2xl border border-border bg-surface/60 p-8",
					children: [/* @__PURE__ */ jsx("h3", {
						className: "text-xl font-bold",
						children: "Sem o SIGANET"
					}), /* @__PURE__ */ jsx("ul", {
						className: "mt-6 space-y-4",
						children: [
							"Atualizando imóveis em vários portais manualmente",
							"Perdendo leads por falta de organização",
							"Utilizando sistemas separados para cada tarefa",
							"Gastando tempo com processos repetitivos"
						].map((p) => /* @__PURE__ */ jsxs("li", {
							className: "flex items-start gap-3 text-muted-foreground",
							children: [/* @__PURE__ */ jsx("span", {
								className: "mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-destructive/15 text-destructive",
								children: /* @__PURE__ */ jsx(X, { className: "h-3 w-3" })
							}), p]
						}, p))
					})]
				}), /* @__PURE__ */ jsxs("div", {
					className: "rounded-2xl border border-primary/30 bg-gradient-card p-8 shadow-glow",
					children: [/* @__PURE__ */ jsxs("h3", {
						className: "text-xl font-bold",
						children: ["Com o ", /* @__PURE__ */ jsx("span", {
							className: "text-gradient",
							children: "SIGANET"
						})]
					}), /* @__PURE__ */ jsx("ul", {
						className: "mt-6 space-y-4",
						children: [
							"Um único cadastro",
							"Publicação automática",
							"Gestão completa dos clientes",
							"Mais produtividade para focar nas vendas"
						].map((g) => /* @__PURE__ */ jsxs("li", {
							className: "flex items-start gap-3",
							children: [/* @__PURE__ */ jsx("span", {
								className: "mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground",
								children: /* @__PURE__ */ jsx(Check, { className: "h-3 w-3" })
							}), g]
						}, g))
					})]
				})]
			})]
		})
	});
}
function Features() {
	return /* @__PURE__ */ jsx("section", {
		id: "funcionalidades",
		className: "py-24 bg-surface/30",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-7xl px-6",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "mx-auto max-w-2xl text-center",
				children: [/* @__PURE__ */ jsx("span", {
					className: "text-xs font-bold uppercase tracking-widest text-primary",
					children: "Funcionalidades"
				}), /* @__PURE__ */ jsxs("h2", {
					className: "mt-3 text-4xl font-bold md:text-5xl",
					children: ["Tudo conectado para ", /* @__PURE__ */ jsx("span", {
						className: "text-gradient",
						children: "vender mais"
					})]
				})]
			}), /* @__PURE__ */ jsx("div", {
				className: "mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3",
				children: [
					{
						icon: MonitorCog,
						title: "CRM Completo",
						desc: "Gerencie clientes, oportunidades e o funil de vendas em um lugar só."
					},
					{
						icon: MessagesSquare,
						title: "Atendimento Centralizado",
						desc: "Acompanhe contatos vindos do WhatsApp, site e portais em um só lugar."
					},
					{
						icon: CloudUpload,
						title: "Automação de Portais",
						desc: "Publique uma única vez e distribua automaticamente para os principais portais imobiliários."
					},
					{
						icon: Globe,
						title: "Domínio Nacional",
						desc: "Seu imóvel ganha visibilidade em todo o Brasil através da rede SIGANET."
					},
					{
						icon: BarChart3,
						title: "Relatórios e dashboards",
						desc: "Indicadores em tempo real para tomar decisões com confiança."
					},
					{
						icon: Cloud,
						title: "Site Integrado",
						desc: "Receba leads diretamente pelo seu site sem precisar atualizar informações manualmente."
					}
				].map(({ icon: Icon, title, desc }) => /* @__PURE__ */ jsxs("div", {
					className: "group rounded-2xl border border-border bg-gradient-card p-7 transition hover:border-primary/50 hover:-translate-y-1",
					children: [
						/* @__PURE__ */ jsx("div", {
							className: "grid h-12 w-12 place-items-center rounded-xl bg-primary/15 text-primary group-hover:bg-gradient-primary group-hover:text-primary-foreground transition",
							children: /* @__PURE__ */ jsx(Icon, { className: "h-6 w-6" })
						}),
						/* @__PURE__ */ jsx("h3", {
							className: "mt-5 text-lg font-bold",
							children: title
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-2 text-sm text-muted-foreground",
							children: desc
						})
					]
				}, title))
			})]
		})
	});
}
function HowItWorks() {
	return /* @__PURE__ */ jsx("section", {
		id: "como-funciona",
		className: "py-24",
		children: /* @__PURE__ */ jsx("div", {
			className: "mx-auto max-w-7xl px-6",
			children: /* @__PURE__ */ jsxs("div", {
				className: "grid grid-cols-1 items-center gap-12 lg:grid-cols-2",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "relative",
					children: [/* @__PURE__ */ jsx("div", { className: "absolute inset-0 -z-10 rounded-3xl bg-primary/20 blur-3xl" }), /* @__PURE__ */ jsx("img", {
						src: dasboard_financeiro_default,
						alt: "Dashboard SIGANET",
						width: 1920,
						height: 1080,
						loading: "lazy",
						className: "rounded-2xl border border-border shadow-card"
					})]
				}), /* @__PURE__ */ jsxs("div", { children: [
					/* @__PURE__ */ jsx("span", {
						className: "text-xs font-bold uppercase tracking-widest text-primary",
						children: "Como funciona"
					}),
					/* @__PURE__ */ jsxs("h2", {
						className: "mt-3 text-4xl font-bold md:text-5xl",
						children: [
							"Comece em ",
							/* @__PURE__ */ jsx("span", {
								className: "text-gradient",
								children: "3 passos"
							}),
							" simples"
						]
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mt-4 text-muted-foreground",
						children: "Da implantação à gestão diária, te acompanhamos em cada etapa."
					}),
					/* @__PURE__ */ jsx("ol", {
						className: "mt-8 space-y-5",
						children: [
							{
								icon: UserPlus,
								n: "01",
								title: "Cadastro",
								desc: "Crie sua conta e configure em minutos, sem complicação."
							},
							{
								icon: Settings2,
								n: "02",
								title: "Organização",
								desc: "Importe clientes, produtos e dados financeiros com nossa equipe ao seu lado."
							},
							{
								icon: TrendingUp,
								n: "03",
								title: "Gestão automatizada",
								desc: "Acompanhe resultados, automatize tarefas e foque no crescimento."
							}
						].map(({ icon: Icon, n, title, desc }) => /* @__PURE__ */ jsxs("li", {
							className: "flex gap-4 rounded-xl border border-border bg-surface/50 p-5",
							children: [/* @__PURE__ */ jsx("div", {
								className: "grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-primary text-primary-foreground shadow-glow",
								children: /* @__PURE__ */ jsx(Icon, { className: "h-5 w-5" })
							}), /* @__PURE__ */ jsxs("div", {
								className: "min-w-0",
								children: [/* @__PURE__ */ jsxs("div", {
									className: "flex items-baseline gap-2",
									children: [/* @__PURE__ */ jsx("span", {
										className: "text-xs font-bold text-primary",
										children: n
									}), /* @__PURE__ */ jsx("h3", {
										className: "font-bold",
										children: title
									})]
								}), /* @__PURE__ */ jsx("p", {
									className: "mt-1 text-sm text-muted-foreground",
									children: desc
								})]
							})]
						}, n))
					})
				] })]
			})
		})
	});
}
function Testimonials() {
	return /* @__PURE__ */ jsx("section", {
		id: "depoimentos",
		className: "py-24 bg-surface/30",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-7xl px-6",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "mx-auto max-w-2xl text-center",
				children: [/* @__PURE__ */ jsx("span", {
					className: "text-xs font-bold uppercase tracking-widest text-primary",
					children: "Prova social"
				}), /* @__PURE__ */ jsxs("h2", {
					className: "mt-3 text-4xl font-bold md:text-5xl",
					children: ["Corretores que já usam a ", /* @__PURE__ */ jsx("span", {
						className: "text-gradient",
						children: "plataforma"
					})]
				})]
			}), /* @__PURE__ */ jsx("div", {
				className: "mt-14 grid grid-cols-1 gap-6 md:grid-cols-3",
				children: [
					{
						q: "Reduzimos mais de 70% do tempo gasto com publicação de imóveis.",
						a: "Imobiliária Exemplo",
						c: "São Paulo · SP"
					},
					{
						q: "Hoje controlamos todos os leads em um só lugar.",
						a: "Imóveis Top",
						c: "Curitiba · PR"
					},
					{
						q: "A automação dos portais mudou nossa produtividade.",
						a: "Casa Nova Imóveis",
						c: "Belo Horizonte · MG"
					}
				].map((t) => /* @__PURE__ */ jsxs("div", {
					className: "rounded-2xl border border-border bg-gradient-card p-7",
					children: [
						/* @__PURE__ */ jsx("div", {
							className: "flex gap-1 text-primary",
							children: Array.from({ length: 5 }).map((_, i) => /* @__PURE__ */ jsx(Star, { className: "h-4 w-4 fill-current" }, i))
						}),
						/* @__PURE__ */ jsxs("p", {
							className: "mt-4 text-foreground/90",
							children: [
								"\"",
								t.q,
								"\""
							]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "mt-6 flex items-center gap-3",
							children: [/* @__PURE__ */ jsx("div", {
								className: "grid h-10 w-10 place-items-center rounded-full bg-gradient-primary font-bold text-primary-foreground",
								children: t.a[0]
							}), /* @__PURE__ */ jsxs("div", {
								className: "min-w-0",
								children: [/* @__PURE__ */ jsx("div", {
									className: "text-sm font-bold truncate",
									children: t.a
								}), /* @__PURE__ */ jsx("div", {
									className: "text-xs text-muted-foreground truncate",
									children: t.c
								})]
							})]
						})
					]
				}, t.a))
			})]
		})
	});
}
function Differentials() {
	return /* @__PURE__ */ jsx("section", {
		className: "py-24",
		children: /* @__PURE__ */ jsx("div", {
			className: "mx-auto max-w-7xl px-6",
			children: /* @__PURE__ */ jsx("div", {
				className: "grid grid-cols-2 gap-6 md:grid-cols-4",
				children: [
					{
						icon: Headphones,
						title: "Suporte próximo",
						desc: "Time humano pronto para ajudar."
					},
					{
						icon: Zap,
						title: "Implantação rápida",
						desc: "Pronto para usar em poucos dias."
					},
					{
						icon: Settings2,
						title: "Sistema intuitivo",
						desc: "Fácil para toda a equipe usar."
					},
					{
						icon: Shield,
						title: "Segurança na nuvem",
						desc: "Backups automáticos e criptografia."
					}
				].map(({ icon: Icon, title, desc }) => /* @__PURE__ */ jsxs("div", {
					className: "text-center",
					children: [
						/* @__PURE__ */ jsx("div", {
							className: "mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-gradient-primary text-primary-foreground shadow-glow",
							children: /* @__PURE__ */ jsx(Icon, { className: "h-6 w-6" })
						}),
						/* @__PURE__ */ jsx("h3", {
							className: "mt-4 font-bold",
							children: title
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-1 text-sm text-muted-foreground",
							children: desc
						})
					]
				}, title))
			})
		})
	});
}
function FinalCTA() {
	return /* @__PURE__ */ jsx("section", {
		id: "cta",
		className: "relative overflow-hidden py-24",
		children: /* @__PURE__ */ jsx("div", {
			className: "mx-auto max-w-5xl px-6",
			children: /* @__PURE__ */ jsxs("div", {
				className: "relative overflow-hidden rounded-3xl border border-primary/40 bg-gradient-card p-10 md:p-16 shadow-glow",
				children: [
					/* @__PURE__ */ jsx("div", { className: "absolute -top-20 -right-20 h-72 w-72 rounded-full bg-primary/30 blur-3xl" }),
					/* @__PURE__ */ jsx("div", { className: "absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-primary-glow/20 blur-3xl" }),
					/* @__PURE__ */ jsxs("div", {
						className: "relative text-center",
						children: [
							/* @__PURE__ */ jsxs("h2", {
								className: "text-4xl font-bold md:text-5xl",
								children: [
									"Pronto para se organizar e ",
									/* @__PURE__ */ jsx("span", {
										className: "text-gradient",
										children: "crescer"
									}),
									"?"
								]
							}),
							/* @__PURE__ */ jsx("p", {
								className: "mx-auto mt-4 max-w-xl text-muted-foreground",
								children: "Agende uma demonstração gratuita e veja o SIGANET funcionando com os seus dados"
							}),
							/* @__PURE__ */ jsxs("a", {
								href: "https://cal.com/igorsiganet/15min",
								target: "blank",
								className: "mt-8 inline-flex items-center gap-2 rounded-xl bg-gradient-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-glow hover:opacity-95 transition",
								children: ["Agendar demonstração gratuita ", /* @__PURE__ */ jsx(ArrowRight, { className: "h-5 w-5" })]
							}),
							/* @__PURE__ */ jsx("p", {
								className: "mt-4 text-xs text-muted-foreground",
								children: "Sem compromisso · Atendimento humano"
							})
						]
					})
				]
			})
		})
	});
}
function Footer() {
	return /* @__PURE__ */ jsxs("footer", {
		className: "border-t border-border bg-surface/40 py-14",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 md:grid-cols-4",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "md:col-span-2",
					children: [/* @__PURE__ */ jsx(Logo, {}), /* @__PURE__ */ jsx("p", {
						className: "mt-4 max-w-sm text-sm text-muted-foreground",
						children: "Centralize sua operação, automatize processos e aumente sua produtividade."
					})]
				}),
				/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h4", {
					className: "text-sm font-bold",
					children: "Plataforma"
				}), /* @__PURE__ */ jsxs("ul", {
					className: "mt-4 space-y-2 text-sm text-muted-foreground",
					children: [
						/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", {
							href: "#funcionalidades",
							className: "hover:text-foreground",
							children: "Funcionalidades"
						}) }),
						/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", {
							href: "#como-funciona",
							className: "hover:text-foreground",
							children: "Como funciona"
						}) }),
						/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", {
							href: "#depoimentos",
							className: "hover:text-foreground",
							children: "Clientes"
						}) })
					]
				})] }),
				/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h4", {
					className: "text-sm font-bold",
					children: "Contato"
				}), /* @__PURE__ */ jsxs("ul", {
					className: "mt-4 space-y-2 text-sm text-muted-foreground",
					children: [
						/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("a", {
							href: "mailto:atendimento@siganet.com.br",
							className: "flex items-center gap-2 hover:text-foreground",
							children: [/* @__PURE__ */ jsx(Mail, { className: "h-4 w-4 text-primary" }), " atendimento@siganet.com.br"]
						}) }),
						/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("a", {
							href: "tel:+554733464000",
							target: "_blank",
							className: "flex items-center gap-2 hover:text-foreground",
							children: [/* @__PURE__ */ jsx(Phone, { className: "h-4 w-4 text-primary" }), "(47) 3346-4000"]
						}) }),
						/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("a", {
							href: "https://maps.app.goo.gl/oBLVyoUqwvADeTZo9",
							target: "_blank",
							className: "flex items-center gap-2 hover:text-foreground",
							children: [/* @__PURE__ */ jsx(MapPin, { className: "h-4 w-4 text-primary" }), "Rua Samuel Heusi, 463 Sala 402 | Box 51 Centro - Itajai/SC"]
						}) })
					]
				})] })
			]
		}), /* @__PURE__ */ jsxs("div", {
			className: "mx-auto mt-10 max-w-7xl px-6 text-xs text-muted-foreground text-center",
			children: [
				"© ",
				(/* @__PURE__ */ new Date()).getFullYear(),
				" ",
				/* @__PURE__ */ jsx("a", {
					href: "https://www.siganet.com.br/site/",
					target: "blank",
					className: "hover:text-foreground",
					children: "SIGANET"
				}),
				" · Todos os direitos reservados."
			]
		})]
	});
}
function WhatsAppButton() {
	return /* @__PURE__ */ jsxs("div", {
		className: "fixed bottom-5 right-5 z-50 group",
		children: [/* @__PURE__ */ jsx("div", {
			className: "absolute bottom-16 right-0 mb-2 hidden group-hover:block",
			children: /* @__PURE__ */ jsx("div", {
				className: "bg-gray-900 text-white text-xs px-3 py-2 rounded-lg shadow-lg whitespace-nowrap",
				children: "Fale com um especialista"
			})
		}), /* @__PURE__ */ jsx("a", {
			href: "https://wa.me/554733464000?text=Olá,%20sou%20corretor!",
			target: "_blank",
			rel: "noopener noreferrer",
			className: "flex items-center justify-center w-14 h-14 rounded-full bg-green-500 shadow-lg hover:scale-110 transition duration-300",
			children: /* @__PURE__ */ jsx("img", {
				src: atendimento_default,
				alt: "WhatsApp",
				className: "w-7 h-7"
			})
		})]
	});
}
function Landing() {
	return /* @__PURE__ */ jsxs("main", {
		className: "min-h-screen bg-background text-foreground",
		children: [
			/* @__PURE__ */ jsx(Nav, {}),
			/* @__PURE__ */ jsx(Hero, {}),
			/* @__PURE__ */ jsx(Problem, {}),
			/* @__PURE__ */ jsx(Features, {}),
			/* @__PURE__ */ jsx(HowItWorks, {}),
			/* @__PURE__ */ jsx(Testimonials, {}),
			/* @__PURE__ */ jsx(Differentials, {}),
			/* @__PURE__ */ jsx(FinalCTA, {}),
			/* @__PURE__ */ jsx(Footer, {}),
			/* @__PURE__ */ jsx(WhatsAppButton, {})
		]
	});
}
//#endregion
export { Landing as component };
