import { jsx as e, Fragment as O, jsxs as i } from "react/jsx-runtime";
import { l as j, e as L, f as ae, B as p, a5 as re, F as q, T as m, $ as r, o as n, a6 as T, a7 as x, a8 as f, a9 as se, aa as N, ab as Q, ac as le } from "./index-DiKfRfmm.mjs";
import { useTracking as ce, useNotification as de, Page as W, Layouts as D, Form as ge } from "@strapi/strapi/admin";
import { useMutation as A, useQuery as M, useQueryClient as he, QueryClient as pe } from "@tanstack/react-query";
import { useMemo as me, useRef as ue, useState as be, useCallback as $ } from "react";
import fe from "styled-components";
import { u as U, e as ye, a as Se, g as t, d as we } from "./index-DBgdpMBd.mjs";
const P = ({
  children: d,
  condition: l
}) => l ? /* @__PURE__ */ e(O, { children: d }) : null, Re = (d = {}) => {
  const l = U(), y = A({
    mutationFn: l.settings.update,
    onSuccess: d.updateSettingsMutationSuccess,
    onError: d.updateSettingsMutationError
  }), S = A({
    mutationFn: l.settings.restore,
    onSuccess: d.restoreSettingsMutationSuccess,
    onError: d.restoreSettingsMutationError
  }), h = A({
    mutationFn: l.settings.restart,
    onSuccess: d.restartStrapiMutationSuccess,
    onError: d.restartStrapiMutationError
  }), w = M({
    queryKey: l.config.getKey(),
    queryFn: l.config.query
  }), u = M({
    queryKey: l.contentTypeBuilder.all.getKey(),
    queryFn: l.contentTypeBuilder.all.query
  }), b = M({
    queryKey: l.roles.getKey(),
    queryFn: l.roles.query
  });
  return me(() => ({
    config: w,
    collectionTypes: u,
    roles: b,
    restoreSettingsMutation: S,
    updateSettingsMutation: y,
    restartStrapiMutation: h
  }), [
    w,
    b,
    u,
    S,
    y,
    h
  ]);
}, I = {
  background: "neutral0",
  hasRadius: !0,
  shadow: "filterShadow",
  padding: 6,
  width: "100%"
}, Ie = fe(le)(() => ({
  "[role]": {
    flexDirection: "column"
  }
})), Ce = () => {
  const { trackUsage: d } = ce(), l = ue(null), { toggleNotification: y } = de(), [S, h] = be(!1), { isLoadingForPermissions: w, canSettingsChange: u } = Se(), b = he(), v = U(), {
    config: c,
    collectionTypes: k,
    roles: C,
    restoreSettingsMutation: G,
    updateSettingsMutation: E,
    restartStrapiMutation: V
  } = Re({
    restoreSettingsMutationSuccess: () => {
      b.invalidateQueries({
        queryKey: v.config.getKey(),
        exact: !1
      }), h(!0), y({
        message: t("page.settings.actions.restore.success"),
        type: "success"
      });
    },
    restartStrapiMutationSuccess: () => {
      h(!1);
    },
    updateSettingsMutationSuccess: () => {
      b.invalidateQueries({
        queryKey: v.config.getKey(),
        exact: !1
      }), h(!0);
    }
  }), z = $(() => {
    l.current?.requestSubmit();
  }, []), J = $((a) => {
    E.mutate({
      ...a,
      blockedAuthorProps: a.blockedAuthorProps.split(",").map((s) => s.trim())
    });
  }, [E]);
  if (c.status !== "success" || k.status !== "success" || C.status !== "success" || w)
    return t("page.settings.loading");
  const F = k.data.filter((a) => a.uid.includes("api::")), X = c.data.enabledCollections.filter((a) => F.some((s) => s.uid === a)), Y = j.isNil(c.data.badWords) ? !0 : c.data?.badWords, Z = !!c.data.gql?.auth, _ = c.data.moderatorRoles.filter((a) => C.data.filter((s) => s.code === a)), ee = c.data.client?.url, te = c.data.client?.contactEmail, ne = c.data.blockedAuthorProps ?? [], ie = () => h(!1);
  return /* @__PURE__ */ i(O, { children: [
    /* @__PURE__ */ e(W.Title, { children: "Comments - settings" }),
    /* @__PURE__ */ i(W.Main, { children: [
      /* @__PURE__ */ e(
        D.Header,
        {
          title: t("page.settings.header.title"),
          subtitle: t("page.settings.header.description"),
          as: "h2",
          primaryAction: /* @__PURE__ */ e(P, { condition: u, children: /* @__PURE__ */ e(L, { type: "submit", startIcon: /* @__PURE__ */ e(ae, {}), onClick: z, children: t("page.settings.actions.submit") }) })
        }
      ),
      /* @__PURE__ */ i(D.Content, { children: [
        S && /* @__PURE__ */ e(p, { marginBottom: 4, children: /* @__PURE__ */ e(
          Ie,
          {
            closeLabel: t("page.settings.actions.restart.alert.cancel"),
            title: t("page.settings.actions.restart.alert.title"),
            onClose: ie,
            action: /* @__PURE__ */ e(p, { children: /* @__PURE__ */ e(L, { onClick: V.mutate, startIcon: /* @__PURE__ */ e(re, {}), children: t("page.settings.actions.restart") }) }),
            children: /* @__PURE__ */ e(p, { marginTop: 4, children: t("page.settings.actions.restart.alert.description") })
          }
        ) }),
        /* @__PURE__ */ e(
          ge,
          {
            method: "POST",
            width: "auto",
            height: "auto",
            ref: l,
            onSubmit: J,
            initialValues: {
              enabledCollections: X,
              moderatorRoles: _,
              badWords: Y,
              clientEmail: te,
              clientUrl: ee,
              gqlAuthEnabled: Z,
              approvalFlow: c.data.approvalFlow,
              entryLabel: c.data.entryLabel,
              blockedAuthorProps: ne.join(", ")
            },
            children: ({ values: a, onChange: s }) => /* @__PURE__ */ i(q, { gap: 4, direction: "column", children: [
              /* @__PURE__ */ i(p, { ...I, children: [
                /* @__PURE__ */ e(m, { variant: "delta", as: "h2", children: t("page.settings.section.general") }),
                /* @__PURE__ */ i(r.Root, { gap: 4, marginTop: 4, width: "100%", children: [
                  /* @__PURE__ */ e(r.Item, { xs: 12, children: /* @__PURE__ */ i(n.Root, { width: "100%", hint: t("page.settings.form.enabledCollections.hint"), children: [
                    /* @__PURE__ */ e(n.Label, { htmlFor: "enabledCollections", children: t("page.settings.form.enabledCollections.label") }),
                    /* @__PURE__ */ e(
                      T,
                      {
                        withTags: !0,
                        name: "enabledCollections",
                        value: a.enabledCollections,
                        onChange: (o) => {
                          s("enabledCollections", o);
                        },
                        children: F.map((o) => /* @__PURE__ */ e(x, { value: o.uid, children: o.schema.displayName }, o.uid))
                      }
                    ),
                    /* @__PURE__ */ e(n.Hint, {})
                  ] }) }),
                  a.enabledCollections.length > 0 && /* @__PURE__ */ e(r.Item, { children: /* @__PURE__ */ i(r.Root, { gap: 4, width: "100%", children: [
                    /* @__PURE__ */ e(r.Item, { children: /* @__PURE__ */ e(m, { children: t("page.settings.form.contentTypesSettings.label") }) }),
                    /* @__PURE__ */ e(r.Item, { children: /* @__PURE__ */ e(f.Root, { style: { width: "100%" }, children: j.orderBy(a.enabledCollections).map((o) => {
                      const H = F.find((R) => R.uid === o);
                      if (H) {
                        const { schema: { displayName: R, attributes: K } } = H, B = Object.keys(K).filter((g) => K[g].type === "string");
                        return /* @__PURE__ */ i(f.Item, { value: o, children: [
                          /* @__PURE__ */ e(f.Header, { children: /* @__PURE__ */ e(f.Trigger, { children: /* @__PURE__ */ e(m, { variant: "epsilon", as: "h3", children: R }) }) }),
                          /* @__PURE__ */ e(f.Content, { children: /* @__PURE__ */ i(r.Root, { padding: 6, gap: 4, children: [
                            /* @__PURE__ */ e(r.Item, { children: /* @__PURE__ */ i(
                              n.Root,
                              {
                                width: "100%",
                                hint: t({
                                  id: "page.settings.form.approvalFlow.hint",
                                  props: { name: R }
                                }),
                                children: [
                                  /* @__PURE__ */ e(n.Label, { children: t("page.settings.form.approvalFlow.label") }),
                                  /* @__PURE__ */ e(
                                    se,
                                    {
                                      visibleLabels: !0,
                                      onLabel: t("components.toogle.enabled"),
                                      offLabel: t("components.toogle.disabled"),
                                      checked: a.approvalFlow.includes(o),
                                      onCheckedChange: (g) => {
                                        s("approvalFlow", g ? [...a.approvalFlow, o] : a.approvalFlow.filter((oe) => oe !== o));
                                      }
                                    }
                                  ),
                                  /* @__PURE__ */ e(n.Hint, {})
                                ]
                              }
                            ) }),
                            /* @__PURE__ */ e(P, { condition: B.length > 0, children: /* @__PURE__ */ e(r.Item, { children: /* @__PURE__ */ i(
                              n.Root,
                              {
                                width: "100%",
                                hint: t("page.settings.form.entryLabel.hint"),
                                children: [
                                  /* @__PURE__ */ e(n.Label, { children: t("page.settings.form.entryLabel.label") }),
                                  /* @__PURE__ */ e(
                                    T,
                                    {
                                      withTags: !0,
                                      placeholder: t("page.settings.form.entryLabel.placeholder"),
                                      name: "enabledCollections",
                                      value: a.entryLabel[o] ?? [],
                                      onChange: (g) => {
                                        s("entryLabel", { ...a.entryLabel, [o]: g });
                                      },
                                      children: B.map((g) => /* @__PURE__ */ e(x, { value: g, children: g }, g))
                                    }
                                  ),
                                  /* @__PURE__ */ e(n.Hint, {})
                                ]
                              }
                            ) }) })
                          ] }) })
                        ] }, o);
                      }
                      return null;
                    }) }) })
                  ] }) })
                ] })
              ] }),
              /* @__PURE__ */ i(p, { ...I, children: [
                /* @__PURE__ */ e(m, { variant: "delta", as: "h2", children: t("page.settings.section.additional") }),
                /* @__PURE__ */ i(r.Root, { gap: 4, marginTop: 4, width: "100%", children: [
                  /* @__PURE__ */ e(r.Item, { xs: 4, alignItems: "start", children: /* @__PURE__ */ i(n.Root, { width: "100%", hint: t("page.settings.form.enabledCollections.hint"), children: [
                    /* @__PURE__ */ e(n.Label, { htmlFor: "enabledCollections", children: t("page.settings.form.enabledCollections.label") }),
                    /* @__PURE__ */ e(
                      N,
                      {
                        name: "badWords",
                        checked: a.badWords,
                        onChange: s,
                        onLabel: t("components.toogle.enabled"),
                        offLabel: t("components.toogle.disabled"),
                        width: "100%"
                      }
                    ),
                    /* @__PURE__ */ e(n.Hint, {})
                  ] }) }),
                  /* @__PURE__ */ e(r.Item, { xs: 4, alignItems: "start", children: /* @__PURE__ */ i(n.Root, { width: "100%", hint: t("page.settings.form.author.blockedProps.hint"), children: [
                    /* @__PURE__ */ e(n.Label, { htmlFor: "enabledCollections", children: t("page.settings.form.author.blockedProps.label") }),
                    /* @__PURE__ */ e(n.Input, { name: "blockedProps", onChange: s }),
                    /* @__PURE__ */ e(n.Hint, {})
                  ] }) }),
                  /* @__PURE__ */ e(r.Item, { xs: 4, alignItems: "start", children: /* @__PURE__ */ i(n.Root, { width: "100%", hint: t("page.settings.form.gqlAuth.hint"), children: [
                    /* @__PURE__ */ e(n.Label, { children: t("page.settings.form.gqlAuth.label") }),
                    /* @__PURE__ */ e(
                      N,
                      {
                        name: "gqlAuthEnabled",
                        checked: a.gqlAuthEnabled,
                        onChange: s,
                        onLabel: t("components.toogle.enabled"),
                        offLabel: t("components.toogle.disabled"),
                        width: "100%"
                      }
                    ),
                    /* @__PURE__ */ e(n.Hint, {})
                  ] }) })
                ] })
              ] }),
              /* @__PURE__ */ i(p, { ...I, children: [
                /* @__PURE__ */ e(m, { variant: "delta", as: "h2", children: t("page.settings.section.client") }),
                /* @__PURE__ */ i(r.Root, { gap: 4, marginTop: 4, width: "100%", children: [
                  /* @__PURE__ */ e(r.Item, { xs: 4, alignItems: "start", children: /* @__PURE__ */ i(n.Root, { width: "100%", hint: t("page.settings.form.client.url.hint"), children: [
                    /* @__PURE__ */ e(n.Label, { children: t("page.settings.form.client.url.label") }),
                    /* @__PURE__ */ e(n.Input, { name: "clientUrl", onChange: s }),
                    /* @__PURE__ */ e(n.Hint, {})
                  ] }) }),
                  /* @__PURE__ */ e(r.Item, { xs: 4, alignItems: "start", children: /* @__PURE__ */ i(n.Root, { width: "100%", hint: t("page.settings.form.client.email.hint"), children: [
                    /* @__PURE__ */ e(n.Label, { children: t("page.settings.form.client.email.label") }),
                    /* @__PURE__ */ e(n.Input, { name: "clientEmail", onChange: s }),
                    /* @__PURE__ */ e(n.Hint, {})
                  ] }) }),
                  /* @__PURE__ */ e(r.Item, { xs: 4, alignItems: "start", children: /* @__PURE__ */ i(
                    n.Root,
                    {
                      width: "100%",
                      hint: t("page.settings.form.moderatorRoles.hint"),
                      children: [
                        /* @__PURE__ */ e(n.Label, { children: t("page.settings.form.moderatorRoles.label") }),
                        /* @__PURE__ */ e(
                          T,
                          {
                            withTags: !0,
                            placeholder: t("page.settings.form.moderatorRoles.placeholder"),
                            name: "enabledCollections",
                            value: a.moderatorRoles,
                            onChange: (o) => {
                              s("moderatorRoles", o);
                            },
                            children: C.data.map((o) => /* @__PURE__ */ e(x, { value: o.code, children: o.name }, o.code))
                          }
                        ),
                        /* @__PURE__ */ e(n.Hint, {})
                      ]
                    }
                  ) })
                ] })
              ] }),
              /* @__PURE__ */ e(P, { condition: u, children: /* @__PURE__ */ e(p, { ...I, children: /* @__PURE__ */ i(q, { gap: 4, direction: "column", alignItems: "flex-start", children: [
                /* @__PURE__ */ i(q, { gap: 2, direction: "column", alignItems: "flex-start", children: [
                  /* @__PURE__ */ e(m, { variant: "delta", as: "h2", children: t("page.settings.section.restore") }),
                  /* @__PURE__ */ e(m, { variant: "pi", as: "h4", children: t("page.settings.section.restore.subtitle") })
                ] }),
                /* @__PURE__ */ e(
                  we,
                  {
                    Trigger: ({ onClick: o }) => /* @__PURE__ */ e(
                      L,
                      {
                        variant: "danger-light",
                        startIcon: /* @__PURE__ */ e(Q, {}),
                        onClick: o,
                        children: t("page.settings.actions.restore")
                      }
                    ),
                    onConfirm: G.mutate,
                    title: t("page.settings.actions.restore.confirmation.header"),
                    labelConfirm: t("page.settings.actions.restore.confirmation.button.confirm"),
                    iconConfirm: /* @__PURE__ */ e(Q, {}),
                    children: t("page.settings.actions.restore.confirmation.description")
                  }
                )
              ] }) }) })
            ] })
          }
        )
      ] })
    ] })
  ] });
};
new pe();
const Pe = () => /* @__PURE__ */ e(ye, { children: /* @__PURE__ */ e(Ce, {}) });
export {
  Pe as default
};
